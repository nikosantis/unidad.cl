import { Fragment } from 'react'
import { Transition } from '@headlessui/react'

import { useMobile } from 'lib/contexts/mobile'

type MobileNavProps = {
  children: React.ReactNode
}

export default function MobileNav({ children }: MobileNavProps) {
  const { isOpen } = useMobile()
  return (
    <Transition
      as={Fragment}
      enter='transition ease-out duration-100'
      enterFrom='transform opacity-0 scale-95'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-100'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'
      show={isOpen}
    >
      <div className='block lg:hidden w-full bg-white p-4 absolute top-full z-50 origin-top shadow-md'>
        <div className='flex flex-col text-center'>{children}</div>
      </div>
    </Transition>
  )
}
