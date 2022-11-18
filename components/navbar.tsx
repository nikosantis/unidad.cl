import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import Header from 'components/header'
import Logo from 'components/logo'

import { seoMetas } from 'lib/seo-metas'
import { navigation } from 'lib/navigation'
import NavbarToggler from './navbar-toggler'
import { MobileProvider } from 'lib/contexts/mobile'
import MobileNav from './mobile-nav'

export default function Navbar() {
  const router = useRouter()
  return (
    <MobileProvider>
      <Header>
        <nav className='w-full bg-slate-100 py-2 relative'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between'>
            <Link href='/' title={seoMetas.title}>
              <Logo height={60} />
            </Link>

            <div className='flex'>
              <div className='hidden lg:flex lg:gap-1 lg:items-center lg:justify-end'>
                {navigation.map(x => {
                  const isActive = x.url === router.asPath
                  if (x.title === 'Diplomado') {
                    return (
                      <a
                        href={x.url}
                        title={x.title}
                        key={x.id}
                        target={'_blank'}
                        rel='noreferrer'
                        className={clsx(
                          'p-2 uppercase',
                          isActive
                            ? 'font-semibold'
                            : 'text-zinc-500 font-normal',
                          'hover:text-slate-700'
                        )}
                      >
                        {x.title}
                      </a>
                    )
                  }
                  return (
                    <Link
                      href={x.url}
                      title={x.title}
                      key={x.id}
                      className={clsx(
                        'p-2 uppercase',
                        isActive
                          ? 'font-semibold'
                          : 'text-zinc-500 font-normal',
                        'hover:text-slate-700'
                      )}
                    >
                      {x.title}
                    </Link>
                  )
                })}
              </div>

              <NavbarToggler />
            </div>
          </div>
          <MobileNav>
            {navigation.map(x => {
              const isActive = x.url === router.asPath
              if (x.title === 'Diplomado') {
                return (
                  <a
                    href={x.url}
                    title={x.title}
                    key={x.id}
                    target={'_blank'}
                    rel='noreferrer'
                    className={clsx(
                      'p-2 uppercase',
                      isActive ? 'font-semibold' : 'text-zinc-500 font-normal',
                      'hover:text-slate-700'
                    )}
                  >
                    {x.title}
                  </a>
                )
              }
              return (
                <Link
                  href={x.url}
                  title={x.title}
                  key={x.id}
                  className={clsx(
                    'p-2 uppercase',
                    isActive ? 'font-semibold' : 'text-zinc-500 font-normal',
                    'hover:text-slate-700'
                  )}
                >
                  {x.title}
                </Link>
              )
            })}
          </MobileNav>
        </nav>
      </Header>
    </MobileProvider>
  )
}
