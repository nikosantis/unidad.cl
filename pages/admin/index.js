import LoginPage from 'components/layout/login-page'
import WideLoader from 'components/wide-loader'
import Formularios from 'components/admin/formularios'

export default function Admin () {
  return (
    <LoginPage
      title='Formularios'
      url='/admin'
    >
      <WideLoader>
        <main>
          <div className='container'>
            <div className='row justify-content-center align-items-center'>
              <div className='col-12'>
                <h1>Formularios</h1>
                <Formularios />
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 text-center'>
                <small>Desarrollado por: <a href='https://www.linkedin.com/in/nikosantis/'>Nikolas Santis</a></small>
              </div>
            </div>
          </div>
        </footer>
        <style jsx>
          {`
            main {
              min-height: calc(100vh - (110px - 211px));
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              background-color: #f8f9fa;
              padding-bottom: 50px;
            }
            h1 {
              text-align: center;
            }
            footer {
              background-color: var(--ns-footer-background);
              padding: 40px 0;
            }
          `}
        </style>
      </WideLoader>
    </LoginPage>
  )
}
