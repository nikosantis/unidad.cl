import { IconType } from 'react-icons'

type ContentBoxProps = {
  Icon: IconType
  title: string
  children: React.ReactNode
}

export default function ContentBox({ Icon, title, children }: ContentBoxProps) {
  return (
    <div className='w-full flex flex-col'>
      <div className='flex justify-center items-center mb-4'>
        <div className='flex justify-center items-center p-4 bg-u-orange-primary-500 rounded-full'>
          <Icon fontSize='30' color='#fff' />
        </div>
      </div>
      <div className='text-center mb-6'>
        <h3 className='font-semibold text-xl'>{title}</h3>
      </div>
      <div className='text-center'>{children}</div>
    </div>
  )
}
