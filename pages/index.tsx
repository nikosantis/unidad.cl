import RootLayout from 'layouts/root'
import { seoMetas } from 'lib/seo-metas'
import Intro from 'components/home/intro'
import About from 'components/home/about'
import Diplomat from 'components/home/diplomat'
import Formation from 'components/home/formation'
import Contact from 'components/contact'

export default function IndexPage() {
  return (
    <RootLayout customMeta={{ ...seoMetas }}>
      <main role='main' className='w-full h-full'>
        <Intro />
        <About />
        <Diplomat />
        <Formation />
        <Contact form='Contacto Inicio' />
      </main>
    </RootLayout>
  )
}
