type HeaderProps = {
  children: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className='w-full sticky top-0 z-50'>
      <div className='h-[10px] flex'>
        <div className='flex-1 bg-u-blue-500' />
        <div className='flex-[1_1_60%] bg-u-orange-primary-500' />
      </div>
      {children}
    </header>
  )
}
