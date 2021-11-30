import LoginPage from 'components/layout/login-page'
import WideLoader from 'components/wide-loader'
import LoginForm from 'components/admin/login/form'

export default function Login() {
  return (
    <LoginPage title='Iniciar Sesión' url='/admin/login'>
      <WideLoader>
        <main>
          <div className='container'>
            <div className='row justify-content-center align-items-center'>
              <div className='col-10 col-md-5'>
                <div className='card'>
                  <div className='card-body'>
                    <h1>Iniciar Sesión</h1>
                    <LoginForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style jsx>
            {`
              main {
                min-height: calc(100vh - (110px - 211px));
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #f8f9fa;
              }
              h1 {
                text-align: center;
              }
            `}
          </style>
        </main>
      </WideLoader>
    </LoginPage>
  )
}
