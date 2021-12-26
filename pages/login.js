//front-end
import SignHeader from '../components/header/SignHeader'
import Head from 'next/head'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
//back-end
import { auth, provider } from '../firebaseFile'
import { useRouter } from 'next/router'

function Login () {
  const router = useRouter()
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert)
    router.push('/')
  }

  return (
    <div
      className='
        h-screen 
        scrollbar-hide 
        pb-10 
        overflow-hidden 
        bg-[#2d3642]'
    >
      <SignHeader />
      <div className='h-screen grid place-items-center'>
        <div className='p-[150px] bg-gray-100 grid place-items-center '>
          <h2 className='text-xl font-medium font-google-sans'>StartUp-Blog</h2>
          <Button
            onClick={signIn}
            color='teal'
            buttonType='filled'
            size='lg'
            iconOnly={false}
            block={false}
            rounded={false}
            className='flex items-center space-x-5'
          >
            <Icon name='login' />
            <h2 className='capitalize font-google-sans'>Sign in</h2>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login
