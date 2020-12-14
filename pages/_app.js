import baseStyles from 'styles/base'
import fontsStyles from 'styles/fonts'
import WhatsApp from 'components/whatsapp'
import 'styles/bootstrap.css'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <style global jsx>
        {fontsStyles}
      </style>
      <style global jsx>
        {baseStyles}
      </style>
      <Component {...pageProps} />
      <WhatsApp />
    </>
  )
}

export default MyApp
