# browserify-github-pages

The purpose of this repo is to help quickly get you started on auto-deploying your open-source [Browserify](http://browserify.org/)-based project onto GitHub Pages using [Travis CI](https://travis-ci.org). Just copy the [stock .travis.yml](.travis.yml) to your repo, no changes needed, and configure Travis.

I have been using Browserify to organize a lot of my side-projects, and wanted a quick way to get them up online. This is the quick cheatsheet I ended up with. See instructions below.

This repo also works as a simple "hello world" Browserify example (see `index.js` as the main entry point) that illustrates the end result. The [.travis.yml](.travis.yml) file is set up to compile the `index.js` file in place, then automatically commit and force-push the result to the `gh-pages` branch of the repository. Results are accessible under the standard GitHub Pages URL for this repo: https://unframework.github.io/browserify-github-pages/

## GitHub Pages Publishing in Your Project

Instructions on setting up auto-deployment of Browserified code on your open source GitHub repo:

Some prerequisites:

- your main code entry point is `index.js`
- your project has a NodeJS `package.json` file
- you *may* have a custom `index.html` file (if not, default index is auto-created)
- YOUR `gh-pages` REPO BRANCH WILL BE OVERWRITTEN (make sure that branch does not exist!)

Let's go:

- create personal GitHub token to allow auto-push
    - https://github.com/settings/tokens/new
    - enter description
    - check `public_repo` scope
    - copy generated token to clipboard
- enable Travis CI on your repository
    - go to "add repository" (the plus sign in the sidebar)
    - find your repo in the list and enable CI (may need to "Sync Account" first)
    - click on gear icon (repo settings)
    - under `Environment Variables` add a `GH_PUBLISH_TOKEN` variable and paste token string as its value
    - make sure "display value in build log" stays in the OFF position!
- download, commit and push the stock [.travis.yml](.travis.yml) file to the `master` branch of your repo
    - `curl -O https://raw.githubusercontent.com/unframework/browserify-github-pages/master/.travis.yml`
    - `git add .travis.yml` and `git commit -m 'Enable Travis'` on master
    - then push to GitHub, of course
    - after a while the build should start in Travis! check to see that it completes with no issue
    - your GitHub Pages site should be in its usual place: `https://<your-username>.github.io/<your-repo>/`

That's it. Open an [issue on this repo](https://github.com/unframework/browserify-github-pages/issues) if you run into problems. Happy Browserifying!

## References

This tutorial is heavily influenced by this helpful [instructional Gist](https://gist.github.com/domenic/ec8b0fc8ab45f39403dd). However, I ended up re-doing the process from scratch, targeting only the Browserify use case, to avoid changing any files, using SSH keys or a second repo clone in Travis.
