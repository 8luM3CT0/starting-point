//front-end
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import HeaderScorecard from './HeaderScorecard'
//back-end

function Header ({ scores }) {
  console.log(scores)

  return (
    <header
      className='
        top-0
        z-50
        sticky
        justify-center
        '
    >
      <div
        className='
        flex-1         
        py-6
        bg-gray-800
        text-white
        px-10
        justify-between
        flex
        items-center'
      >
        <div
          className='
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
        <div
          className='
        justify-end 
        flex 
        items-center 
        space-x-8'
        >
          <Button
            className='border-0'
            buttonType='solid'
            iconOnly={true}
            color='#1f2937'
          >
            <Icon name='person' size='3xl' />
          </Button>
          <h2 className='username'>username</h2>
        </div>
      </div>
      <div
        className='
        flex-1
        scrollbar-hide
        overflow-x-scroll
        whitespace-nowrap 
        justify-evenly 
        flex
        items-center
        py-5
        px-6
        text-gray-50
      bg-gray-600'
      >
        <HeaderScorecard />
        <HeaderScorecard />
        <HeaderScorecard />
        <HeaderScorecard />
        <HeaderScorecard />
        <HeaderScorecard />
        <HeaderScorecard />
        <HeaderScorecard />
        <HeaderScorecard />
      </div>
    </header>
  )
}

export default Header
