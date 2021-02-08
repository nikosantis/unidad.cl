import PageContainer from 'components/page-container'
import { AuthProvider } from 'contexts/auth-context'

export default function LoginPage ({ title, description, url, children }) {
  return (
    <PageContainer title={title} description={description} url={url}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </PageContainer>
  )
}
