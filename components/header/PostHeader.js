//front-end
import Head from 'next/head'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import { UserIcon } from '@heroicons/react/solid'
//header posting
import Tab from '@material-tailwind/react/Tab'
import TabList from '@material-tailwind/react/TabList'
import TabItem from '@material-tailwind/react/TabItem'
import TabContent from '@material-tailwind/react/TabContent'
import TabPane from '@material-tailwind/react/TabPane'
//back-end
import { auth, store, provider } from '../../firebaseFile'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function PostHeader () {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showModal, setShowModal] = useState(false)

  const signIn = e => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        router.push('/')
      })
      .catch(alert)
    setEmail('')
    setPassword('')
  }

  const logInWithGoogle = () => {
    auth.signInWithPopup(provider).catch(alert)
  }

  const logOut = () => {
    auth.signOut()
  }

  const goToSignUp = () => {
    router.push('/signup')
  }

  const [user] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      store
        .collection('people')
        .doc(user.uid)
        .set(
          {
            email: user.email,
            photoURL: user.photoURL,
            displayName: user.displayName
          },
          { merge: true }
        )
    }
  }, [user])

  return (
    <>
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
        bg-[#0c1727]
        px-10
        border-b-2
        border-teal-500
        justify-between
        flex
        items-center'
        >
          <div
            className='
          cursor-pointer
        flex
        items-center
        text-center
        space-x-8
        '
          >
            <div className='hover:animate-pulse'>
              <Button
                onClick={e => router.push('/blog')}
                color='#1f2937'
                buttonType='solid'
                iconOnly={true}
                ripple='light'
                size='3xl'
                className='border-0 h-[50px] '
              >
                <div className='flex items-center text-center space-x-3'>
                  <Icon
                    color='teal'
                    name='arrow_back_ios'
                    className='pr-4 h-[50px]'
                  />
                </div>
              </Button>
            </div>
            <div className='ml-5 flex space-x-5 items-center'>
              <Icon
                name='article'
                color='teal'
                className='text-xl'
                size='3xl'
              />
              <h1 className='blogPageTitle'>Post</h1>
            </div>
          </div>
          <div className='blogAuthor'>
            <h3 className='text-lg font-semibold'>Blog by</h3>
            <h4 className='text-xl font-light text-blue-200'>{user.email}</h4>
          </div>
          <div
            className='
            hover:underline
            rounded-3xl
        justify-end
        cursor-pointer 
        flex 
        items-center 
        space-x-8'
          >
            <div
              className='
        hover:animate-pulse
        justify-end
        cursor-pointer 
        flex 
        items-center 
        space-x-8'
            >
              {user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  alt=''
                  className='h-10 rounded-3xl border border-blue-400'
                />
              ) : (
                <UserIcon className='h-10 bg-gray-700 rounded-3xl border border-blue-400' />
              )}
              {user?.displayName ? (
                <h2 className='username ml-3 text-teal-300'>
                  {user?.displayName}
                </h2>
              ) : (
                <h2 className='username ml-3 text-teal-300'>{user?.email}</h2>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default PostHeader
