# hangli.me - Personal Academic Website

Personal website for Dr. Hang Li, built with [Jekyll](https://jekyllrb.com/) using a customized [AcademicPages](https://github.com/academicpages/academicpages.github.io) theme (a fork of [Minimal Mistakes](https://mademistakes.com/work/minimal-mistakes-jekyll-theme/)).

**Live site:** [https://hangli.me](https://hangli.me)

## Run Locally

### Prerequisites

- Ruby (2.6+ recommended)
- Bundler (`gem install bundler`)
- Node.js

**macOS:**

```bash
brew install ruby node
gem install bundler
```

**Ubuntu/Debian:**

```bash
sudo apt install ruby-dev ruby-bundler nodejs
```

### Setup and Serve

```bash
# Clone the repository
git clone https://github.com/hanglics/hanglics.github.io.git
cd hanglics.github.io

# Install dependencies
bundle install
# If you get errors, try: rm Gemfile.lock && bundle install

# Serve locally with live reload
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`. It auto-rebuilds on file changes.

## Deploy to GitHub Pages

This site is deployed automatically via GitHub Pages.

### How it works

1. Push changes to the `master` branch of the repository `hanglics/hanglics.github.io`.
2. GitHub Pages automatically builds and deploys the Jekyll site.

### Custom Domain (hangli.me) with HTTPS

The custom domain is configured via:

- A `CNAME` file in the repo root containing `hangli.me`.
- DNS records pointing to GitHub Pages servers. The DNS should have:
  - An `A` record pointing to GitHub Pages IPs:
    ```
    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153
    ```
  - A `CNAME` record for `www` pointing to `hanglics.github.io`.
- HTTPS is enforced via the repository settings under **Settings > Pages > Enforce HTTPS**.

### Adding Content

- **Publications:** Add Markdown files to `_publications/` with proper front matter.
- **Teaching:** Add Markdown files to `_teaching/`.
- **Files (PDFs, etc.):** Place in `files/` directory. Accessible at `https://hangli.me/files/<filename>`.
- **Images:** Place in `images/` directory.
- **Site config:** Edit `_config.yml` (requires server restart).

## Project Structure

```
_config.yml         # Site configuration
_pages/             # Static pages (about, publications, teaching, etc.)
_publications/      # Publication entries
_teaching/          # Teaching entries
_talks/             # Talk entries
_includes/          # HTML partials (masthead, footer, sidebar, etc.)
_layouts/           # Page layout templates
_sass/              # SCSS stylesheets
assets/css/         # Main CSS entry point and additional styles
assets/js/          # JavaScript files
images/             # Image assets
files/              # Downloadable files (PDFs, etc.)
_data/              # YAML data files (navigation, authors)
CNAME               # Custom domain configuration
```
