//front-end
import SignHeader from '../components/header/SignHeader'
import Head from 'next/head'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
//back-end
import { auth, store } from '../firebaseFile'
import { useState } from 'react'
import { useRouter } from 'next/router'

function Signup () {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [photoURL, setPhotoURL] = useState('')

  const register = e => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        if (auth) {
          store.collection('people').add({
            email: email,
            password: password,
            displayName: displayName,
            photoURL: photoURL
          })
          router.push('/')
        }
      })
      .catch(alert)
  }

  return (
    <div className='scrollbar-hide h-screen flex-col'>
      <Head>
        <title>Sign-up here</title>
      </Head>
      <SignHeader />

      <main
        className='
        place-self-center
      justify-center
      mx-auto
      max-w-7xl
      bg-gray-100
      '
      >
        <h1
          className='
          text-gray-600
          animate-pulse
          underline 
          font-google-sans 
          font-bold 
           text-2xl 
          md:text-[160px] 
          p-5
          '
        >
          Sign Up
        </h1>

        <form className='mt-10 space-y-10 ml-4 px-8 grid'>
          <h2
            className='
            text-lg 
            font-google-sans 
            font-bold
            text-gray-700'
          >
            Email
          </h2>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='email'
            className='
            rounded-lg
            py-4
            px-3
            border 
            border-blue-400 
            bg-gray-50 
            outline-none'
          />
          <h2
            className='
            text-lg 
            font-google-sans 
            font-bold
            text-gray-700'
          >
            Password
          </h2>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            className='
            rounded-lg
            py-4
            px-3
            border 
            border-blue-400 
            bg-gray-50 
            outline-none'
          />
          <h2
            className='
            text-lg 
            font-google-sans 
            font-bold
            text-gray-700'
          >
            Username
          </h2>
          <input
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
            type='text'
            className='
            rounded-lg
            py-4
            px-3
            border 
            border-blue-400 
            bg-gray-50 
            outline-none'
          />
          <h2
            className='
            text-lg 
            font-google-sans 
            font-bold
            text-gray-700'
          >
            Profile picture
          </h2>
          <input
            type='url'
            value={photoURL}
            onChange={e => setPhotoURL(e.target.value)}
            className='
            rounded-lg
            py-4
            px-3
            border 
            border-blue-400 
            bg-gray-50 
            outline-none'
          />
          <Button
            onClick={register}
            disabled={!password && !email && !displayName && !photoURL}
            className='
        border-0 
        flex 
        items-center 
        space-x-8 
        px-4 
        rounded-3xl'
            color='blue'
            buttonType='solid'
          >
            <Icon name='person_add' size='3xl' />
            <h2
              className='
              font-semibold 
              text-white 
              capitalize 
              font-google-sans'
            >
              Sign Up
            </h2>
          </Button>
        </form>
      </main>
    </div>
  )
}

export default Signup
