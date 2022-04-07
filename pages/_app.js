import { NextSeo } from "next-seo"

import 'styles/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="NIHR | NHS Open Source Imaging Datasets"
        description="A list of open source imaging datasets."
        openGraph={{
          url: 'https://nhsx.github.io/open-source-imaging-data-sets/',
          title: 'NIHR | NHS Open Source Imaging Datasets',
          description: 'A simple dictionary of common AI terms with a health and care context',
          images: [
            {
              url: 'https://nhsx.github.io/open-source-imaging-data-sets/social-cover.png',
              width: 1200,
              height: 630,
              alt: 'NIHR | NHS Open Source Imaging Datasets Social Cover',
              type: 'image/png',
            }
          ],
        }}
        twitter={{
          handle: '@NHSuk',
          site: '@NHSuk',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}