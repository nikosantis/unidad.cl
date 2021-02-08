import PageContainer from './page-container'
import Header from './header'
import WhatsApp from 'components/whatsapp'

export default function Page ({ title, description, url, children }) {
  return (
    <PageContainer title={title} description={description} url={url}>
      <Header />
      {children}
      <WhatsApp />
    </PageContainer>
  )
}
