# hangli.me

Personal academic website for Dr. Hang Li (Alex), a postdoctoral researcher at the University of Queensland. Built with Jekyll and deployed through GitHub Actions to GitHub Pages at [hangli.me](https://hangli.me).

The design uses a restrained Liquid Glass aesthetic: translucent navigation and controls, soft background colour, and readable research content. It adapts to mobile screens and includes keyboard focus, reduced-motion support, and a fallback for browsers without backdrop blur.

## Local development

Use **Ruby 3.2 or newer** and **Bundler 4.0.7**, the version recorded in `Gemfile.lock`. macOS's system Ruby 2.6 cannot run this dependency set. Select a compatible Ruby through your preferred version manager, or use an existing Homebrew Ruby installation:

```bash
# When Homebrew ruby@3.4 is installed on Apple Silicon:
export PATH="/opt/homebrew/opt/ruby@3.4/bin:$PATH"

ruby --version
gem install bundler -v 4.0.7
bundle _4.0.7_ install
bundle _4.0.7_ exec jekyll serve --config _config.yml,_config.dev.yml --livereload
```

Open [localhost:4000](http://localhost:4000). Jekyll rebuilds after content and style changes; restart the server after editing `_config.yml`. Node.js is not needed for the current Jekyll build.

Keep `Gemfile.lock`: it pins the dependency versions used by the deployed site. If Bundler reports a Ruby compatibility error, select a compatible Ruby before installing dependencies.

To check the production build locally:

```bash
JEKYLL_ENV=production bundle _4.0.7_ exec jekyll build
```

Generated files live in `_site/`; edit the source files below.

## Editing the website

| Content | Source |
| --- | --- |
| Homepage biography and sections | `_pages/about.md` and the homepage data in `_data/` |
| Publication metadata and individual paper pages | `_publications/*.md` |
| Publications index | `_pages/publications.md` |
| Teaching entries | `_teaching/*.md` |
| Main navigation | `_data/navigation.yml` |
| Site identity and contact links | `_config.yml` |
| Shared layouts and page components | `_layouts/` and `_includes/` |
| Design styles | `assets/css/` and `_sass/` |
| Navigation and publication interactions | `assets/js/` |
| Portrait and publication images | `images/` |
| CV and downloadable materials | `files/` |

Keep publication titles, authors, venues, resource links, and dates in the existing front matter. Follow a recent entry when adding a paper. Use its original pipeline figure when available; otherwise create a representative conceptual illustration.

Publication thumbnails live in `images/publications/` as optimized WebP images. Set `research_image`, descriptive `research_image_alt`, the image's actual `research_image_width` and `research_image_height`, and `research_image_kind` (`paper-figure` or `generated`) in each publication's front matter. `research_image_caption` supplies the caption on the detail page. The shared cards preserve the complete figure on both the homepage and publications index.

`_data/publication_images.yml` records each thumbnail's source paper, figure number and PDF page, or the full prompt used with the built-in image generator. Keep this source record in sync when replacing an image.

The navigation links directly to `files/cv.pdf`; `/cv/` and `/resume` also redirect there. Previous placeholder student and miscellaneous pages redirect to the teaching page and homepage.

## Deployment

[`.github/workflows/jekyll.yml`](.github/workflows/jekyll.yml) installs Ruby 3.2 and the locked gems, builds the site, and uploads the output to GitHub Pages. It runs on pushes to `master` and can also be started manually from the repository's Actions tab.

The custom domain is stored in `CNAME`. Domain and HTTPS settings are managed in the repository's **Settings → Pages**.

The site retains the Jekyll, AcademicPages, and Minimal Mistakes foundation. Theme attribution and licences are preserved in the repository.
