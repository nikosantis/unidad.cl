import { Roboto_Flex } from '@next/font/google'
import clsx from 'clsx'

import Seo, { CustomMetaType } from 'components/seo'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import GTMPageView from 'components/gtm-page-view'

const roboto = Roboto_Flex({
  weight: 'variable',
  variable: '--font-roboto',
  subsets: ['latin']
})

type RootLayoutProps = {
  children: React.ReactNode
  customMeta?: CustomMetaType
}

export default function RootLayout({ children, customMeta }: RootLayoutProps) {
  return (
    <div className={clsx(roboto.variable, 'w-full h-full')}>
      <GTMPageView />
      <Seo customMeta={customMeta} />
      <Navbar />
      <div className='w-full h-full'>{children}</div>
      <Footer />
    </div>
  )
}
