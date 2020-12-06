import { useState, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'
import Logo from 'components/logo'
import Collapse from 'components/collapse'

export default function Navbar () {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)

  const handleClick = useCallback(() => {
    setCollapsed((collapsed) => !collapsed)
  }, [])

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link href='/'>
          <a className='navbar-brand'>
            <div className='logos'>
              <div className='logo-unidad'>
                <Logo height={70} />
              </div>
            </div>
          </a>
        </Link>

        <button
          className={`navbar-toggler${collapsed ? ' collapsed' : ''}`}
          type='button'
          data-toggle='collapse'
          aria-expanded={collapsed.toString()}
          aria-label='Toggle navigation'
          onClick={handleClick}
        >
          <span className='navbar-toggler-icon' />
        </button>

        <Collapse isOpen={collapsed} navbar>
          <ul className='navbar-nav ml-auto'>
            <li className={cx('nav-item', {
              active: router.pathname === '/'
            })}
            >
              <Link href='/'>
                <a className='nav-link'>Inicio</a>
              </Link>
            </li>
            <li className={cx('nav-item', {
              active: router.pathname === '/quienes-somos'
            })}
            >
              <Link href='/quienes-somos'>
                <a className='nav-link'>Quiénes Somos</a>
              </Link>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='https://diplomadopsicoterapia.cl/'>
                Diplomado
              </a>
            </li>
            <li className={cx('nav-item', {
              active: router.pathname === '/tratamientos'
            })}
            >
              <Link href='/tratamientos'>
                <a className='nav-link'>Tratamientos</a>
              </Link>
            </li>
          </ul>
        </Collapse>
      </div>

      <style jsx>
        {`
          .logos {
            display: flex;
            flex-direction: row;
          }
          .navbar-nav {
            text-align: center;
            @media (min-width: 992px) {
              text-align: left;
            }
          }
          .nav-item.active .nav-link {
            font-weight: 600;
            color: var(--ns-fg);
          }
        `}
      </style>
    </nav>
  )
}
