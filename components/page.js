import PageContainer from './page-container'
import Header from './header'

export default function Page ({ title, description, url, children }) {
  return (
    <PageContainer title={title} description={description} url={url}>
      <Header />
      {children}
    </PageContainer>
  )
}
