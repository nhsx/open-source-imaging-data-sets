## What is it? 

A list of open source imaging datasets. 

## Displaying data

Currently the CSV file [`/public/data/open-source-datasets-merged.csv`](https://github.com/nhsx/open-source-imaging-data-sets/blob/main/public/data/open-source-datasets-merged.csv) is being pulled through and dislpayed in [`/pages/index.js`](https://github.com/nhsx/open-source-imaging-data-sets/blob/main/pages/index.js).

The columns are parsed on [L41](https://github.com/nhsx/open-source-imaging-data-sets/blob/c52345224dc3a70131d95a0d2dde85c13ea3d0e2/pages/index.js#L42) into an object. From here, they are displayed in the table which starts a [L158](https://github.com/nhsx/open-source-imaging-data-sets/blob/c52345224dc3a70131d95a0d2dde85c13ea3d0e2/pages/index.js#L158). 

If a column in the CSV is changed, added or removed; these are the two locations you'll need to edit in order to get the new data displaying. 

## Developing

To run the development server, first install the project dependancies:

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

Upon merging into production, the project is automatically deployed to Github Pages via a Githook Action found in `.github/workflows/gh-pages-deployment.yml`. 
