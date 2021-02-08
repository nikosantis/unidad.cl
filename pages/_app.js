import baseStyles from 'styles/base'
import fontsStyles from 'styles/fonts'
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
    </>
  )
}

export default MyApp
