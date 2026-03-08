# frozen_string_literal: true

begin
  require "webrick"
rescue LoadError
end

if defined?(WEBrick::HTTPServer)
  module WEBrick
    class BasicLog
      unless method_defined?(:log_without_client_disconnect_noise)
        alias log_without_client_disconnect_noise log

        DISCONNECT_NOISE = [
          "Errno::ECONNRESET",
          "Errno::EPIPE",
          "Errno::ENOTCONN",
          "Errno::EINVAL: Invalid argument - getpeername(2)",
        ].freeze

        # Hide noisy socket disconnect logs produced by browsers in local dev.
        def log(level, data)
          message = data.is_a?(Exception) ? "#{data.class}: #{data.message}" : data.to_s
          return if DISCONNECT_NOISE.any? { |needle| message.include?(needle) }

          log_without_client_disconnect_noise(level, data)
        end
      end
    end
  end

  module WEBrick
    class HTTPServer
      unless method_defined?(:run_without_client_disconnect_noise)
        alias run_without_client_disconnect_noise run

        # Browsers may close keep-alive sockets aggressively; avoid noisy logs.
        def run(sock)
          run_without_client_disconnect_noise(sock)
        rescue Errno::ECONNRESET, Errno::EPIPE, EOFError
          nil
        end
      end
    end
  end
end
