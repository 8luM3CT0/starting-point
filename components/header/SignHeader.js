//front-end
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
//back-end
import { useRouter } from 'next/router'

function SignHeader () {
  const router = useRouter()

  return (
    <header
      className='
        top-0 
        bg-gray-800 
        py-6 
        px-10 
        z-50 
        sticky 
        justify-between'
    >
      <div
        onClick={() => router.push('/')}
        className='
            cursor-pointer
            hover:animate-pulse
            text-white
            flex
            items-center
            space-x-8
            '
      >
        <Button
          color='#1f2937'
          buttonType='solid'
          iconOnly={true}
          ripple='light'
          size='3xl'
          className='border-0 h-[50px]'
        >
          <Icon name='sports' className='pr-4 h-[50px]' />
        </Button>
        <h1 className='appName'>StartUp</h1>
      </div>
    </header>
  )
}

export default SignHeader
