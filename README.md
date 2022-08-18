![node version 14](https://img.shields.io/badge/node-v14-green)
![npm version 8.11.0](https://img.shields.io/badge/npm-v8.11.0-blue)

# What is it? 

A list of open source imaging datasets, maintained by the [NIHR Imaging Group](https://www.nihr.ac.uk/explore-nihr/innovation-areas/imaging.htm) and the [NHS AI Lab](https://transform.england.nhs.uk/ai-lab/).

## How it works

The NIHR Imaging Group maintain a spreadsheet of open source imaging datasets with a number of attributes. When this spreadsheet is updated, a manual export to csv is required, with the resulting csv stored in [`/public/data/snapshot-dataset.csv`](https://github.com/nhsx/open-source-imaging-data-sets/blob/main/public/data/snapshot-dataset.csv).

The csv file is pulled through and displayed in [`/pages/index.js`](https://github.com/nhsx/open-source-imaging-data-sets/blob/main/pages/index.js).

The columns are parsed on [L41](https://github.com/nhsx/open-source-imaging-data-sets/blob/c52345224dc3a70131d95a0d2dde85c13ea3d0e2/pages/index.js#L42) into an object. From here, they are displayed in the table which starts a [L158](https://github.com/nhsx/open-source-imaging-data-sets/blob/c52345224dc3a70131d95a0d2dde85c13ea3d0e2/pages/index.js#L158). 

If a column in the CSV is changed, added or removed; these are the two locations you'll need to edit in order to get the new data displaying. 

## Getting started

You will need:

* node v14
* npm v8.11.0

It is recommended to use a node package manager like [nvm](https://github.com/nvm-sh/nvm) to manage node versions.

To run the development server, first install the project dependencies:

```bash
npm i
```

Then start the development server: 

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building

If you want to build and export the project locally, then run the commands below: 

```bash
npm run build
```

If the build completes successfully, then you can export the project to static HTML files using the command: 

```bash
npm run export 
```

**Note:** using the static export feature disables some of the features of Next.js as you can [read here](https://nextjs.org/docs/advanced-features/static-html-export). Currently, none of these features are used on this project. 

## Deployment  

Upon merging into `main`, the project is automatically deployed to Github Pages via a Githook Action found in `.github/workflows/gh-pages-deployment.yml`. 

## Licence

Unless stated otherwise, the codebase is released under [the MIT Licence][mit].
This covers both the codebase and any sample code in the documentation.

The documentation is [© Crown copyright][copyright] and available under the terms
of the [Open Government 3.0][ogl] licence.

[mit]: LICENCE.md
[copyright]: http://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/
[ogl]: http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
