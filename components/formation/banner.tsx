import IntroImage from './intro-image'
import Base from './svgs/base'
import Cien from './svgs/cien'
import Text from './svgs/text'

export default function Banner() {
  return (
    <>
      <div className='absolute top-0 bottom-0 lg:-right-32 xl:right-0 z-10 hidden lg:block'>
        <Base />
      </div>

      <div className='absolute lg:right-[2%] xl:right-[5%] z-20 hidden lg:block'>
        <Cien />
      </div>

      <div className='absolute z-30 lg:-right-24 xl:right-0  bottom-0 hidden lg:block'>
        <Text />
      </div>

      <div className='absolute z-20 lg:right-[60px] xl:right-[250px] w-[465px] h-[449px] bottom-20 hidden lg:block'>
        <IntroImage />
      </div>
    </>
  )
}
