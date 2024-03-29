import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Flex } from 'next/font/google'
import clsx from 'clsx'
import Script from 'next/script'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

import { GTM_ID } from 'lib/gtm'

const roboto = Roboto_Flex({
  weight: 'variable',
  variable: '--font-roboto',
  subsets: ['latin']
})

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <div
        className={clsx(
          roboto.variable,
          'w-full h-full text-slate-500 text-base font-normal font-sans'
        )}
      >
        <Script
          id='GTM'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `
          }}
        />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
