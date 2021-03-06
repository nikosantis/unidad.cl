import Page from 'components/page'
import Footer from 'components/footer'
import Spacer from 'components/spacer'
import Intro from 'components/home/intro'
import About from 'components/home/about'
import Diplomado from 'components/home/diplomado'
import FormacionTecnica from 'components/home/formacion-tecnica'
import Contact from 'components/home/contact'

export default function Home () {
  return (
    <Page>
      <Spacer height='110' background='var(--ns-bg-secondary)' />
      <main>
        <Intro />
        <About />
        <Diplomado />
        <FormacionTecnica />
        <Contact />
      </main>
      <Footer />

      <style jsx>
        {`
          main {
            min-height: calc(100vh - (110px - 211px));
          }
        `}
      </style>
    </Page>
  )
}
