import Navbar from 'components/navbar'

export default function Header () {
  return (
    <header className='header fixed-top'>
      <div className='header-top'>
        <div className='header-top-blue' />
        <div className='header-top-orange' />
      </div>

      <Navbar />
      <style jsx>
        {`
          .header {
            width: 100vw;
            min-height: 106px;
          }

          .header-top {
            width: 100vw;
            height: 10px;
            display: flex;
          }

          .header-top-blue {
            background-color: var(--ns-blue);
            flex: 0.6;
          }

          .header-top-orange {
            background-color: var(--ns-orange);
            flex: 1;
          }
        `}
      </style>
    </header>
  )
}
