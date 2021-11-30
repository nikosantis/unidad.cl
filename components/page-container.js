import Head from 'next/head'

export default function PageContainer({ title, description, url, children }) {
  return (
    <div className='wrapper'>
      <Head>
        <title>
          {title || 'Unidad de Adicciones | Universidad de Santiago de Chile'}
        </title>
        <meta
          property='og:title'
          content={
            title || 'Unidad de Adicciones | Universidad de Santiago de Chile'
          }
        />
        <meta
          name='description'
          content={
            description ||
            'Unidad de Adicciones de la Universidad de Santiago de Chile. Tratamiento de adicciones, drogas y drogadicción.'
          }
        />
        <meta
          property='og:description'
          content={
            description ||
            'Unidad de Adicciones de la Universidad de Santiago de Chile. Tratamiento de adicciones, drogas y drogadicción.'
          }
        />
        {/* <meta
          property='og:image'
          content='https://unidad.cl/images/og-image.png'
        /> */}
        <meta
          property='og:url'
          content={`https://unidad.cl/${url}` || 'https://unidad.cl/'}
        />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='es_ES' />
        <meta httpEquiv='Content-Language' content='es' />
        <meta name='author' content='Nikolas Santis' />
      </Head>

      {children}

      <style jsx>
        {`
          .wrapper {
            width: 100vw;
            min-height: 100vh;
          }
        `}
      </style>
      <style jsx global>
        {`
          body {
            scroll-behavior: smooth;
            background-color: var(--ns-bg);
            color: var(--ns-fg);
            text-rendering: optimizeSpeed;
          }

          a {
            transition: color 0.2s ease;
            color: var(--ns-fg);
            &:hover {
              color: var(--ns-orange);
            }
          }

          .nav-link {
            text-transform: uppercase;
            cursor: pointer;
          }

          /* Remove all animations and transitions for people that prefer not to see them */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
        `}
      </style>
    </div>
  )
}
