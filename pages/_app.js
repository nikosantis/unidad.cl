import 'styles/bootstrap.css'
import baseStyles from 'styles/base'
import fontsStyles from 'styles/fonts'
import WhatsApp from 'components/whatsapp'

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
