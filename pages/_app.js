import Script from 'next/script'
import baseStyles from 'styles/base'
import fontsStyles from 'styles/fonts'
import 'styles/bootstrap.css'
import { GTM_ID } from 'lib/tagmanager'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy='afterInteractive'
        id='GTM'
        dangerouslySetInnerHTML={{
          __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `
        }}
      />
      <style global jsx>
        {fontsStyles}
      </style>
      <style global jsx>
        {baseStyles}
      </style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
