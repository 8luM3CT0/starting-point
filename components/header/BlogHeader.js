//front-end
import Head from 'next/head'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import {
  UserIcon,
  HomeIcon,
  BookOpenIcon,
  InformationCircleIcon,
  IdentificationIcon
} from '@heroicons/react/solid'
import BookIcon from '@material-ui/icons/Book'
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

function BlogHeader () {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showMoreOptions, setShowMoreOptions] = useState(false)
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
            <div className='menuBtn'>
              <Button
                onClick={e => setShowMoreOptions(true)}
                color='#1f2937'
                buttonType='solid'
                iconOnly={true}
                ripple='light'
                size='3xl'
                className='border-0 h-[50px] '
              >
                <div className='flex items-center text-center space-x-3'>
                  <Icon color='teal' name='menu' className='pr-4 h-[50px]' />
                </div>
              </Button>
            </div>
            <div
              onClick={() => router.push('/blog')}
              className='ml-5 flex space-x-5 items-center'
            >
              <BookIcon className='text-teal-300 text-xl' />
              <h1 className='blogPageTitle'>Blog</h1>
            </div>
          </div>
          <div
            className='
        flex
        items-center
        space-x-6
        lg:space-x-10
        text-[#4bb6af]
        '
          >
            <h2 onClick={() => router.push('/')} className='headerOptions'>
              Home
            </h2>
            <h2
              onClick={() => router.push('/scores')}
              className='headerOptions'
            >
              Scores
            </h2>
            <h2 onClick={() => router.push('/blog')} className='headerOptions'>
              Blog
            </h2>
            <h2
              onClick={() => router.push('/scores')}
              className='headerOptions'
            >
              Scores
            </h2>
          </div>
          {!user ? (
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
              <Button
                onClick={e => setShowModal(true)}
                className='border-0 rounded-3xl'
                buttonType='solid'
                color='lightBlue'
              >
                <h2 className='text-base md:text-xl font-medium font-hind-font'>
                  Sign in
                </h2>
              </Button>
              <Modal
                className='justify-center'
                size='sm'
                active={showModal}
                toggler={() => setShowModal(false)}
              >
                <ModalHeader toggler={() => setShowModal(false)}>
                  Sign In
                </ModalHeader>
                <ModalBody className='justify-center grid'>
                  <p className='text-base leading-relaxed text-gray-600 font-normal'>
                    Email
                  </p>
                  <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type='text'
                    className='
                border 
                text-gray-800
                border-blue-100 
                rounded-lg outline-none 
                bg-gray-50'
                  />
                  <p className='text-base leading-relaxed text-gray-600 font-normal'>
                    Password
                  </p>
                  <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                    className='
                border 
                text-gray-800
                border-blue-100 
                rounded-lg outline-none 
                bg-gray-50'
                  />
                  <div className='flex mt-5 items-center space-x-3'>
                    <Button color='teal' onClick={signIn} ripple='light'>
                      Sign In
                    </Button>
                  </div>
                </ModalBody>
                <ModalBody className='justify-center space-y-5'>
                  <p className='text-base leading-relaxed text-gray-600 font-normal'>
                    Otherwise, sign in with Google
                  </p>
                  <Button
                    className='mt-5'
                    color='blue'
                    onClick={logInWithGoogle}
                    ripple='light'
                  >
                    Google sign in
                  </Button>
                </ModalBody>
                <ModalBody className='justify-center space-y-5'>
                  <p className='text-base leading-relaxed text-gray-600 font-normal'>
                    Or, if you don't have an account yet, then sign up
                  </p>
                  <Button
                    onClick={goToSignUp}
                    buttonType='link'
                    className='mt-5'
                    color='orange'
                    ripple='light'
                  >
                    Sign up
                  </Button>
                </ModalBody>
              </Modal>
            </div>
          ) : (
            <div
              onClick={logOut}
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
          )}
        </div>
      </header>
      <Modal
        size='regular'
        active={showMoreOptions}
        toggler={() => setShowMoreOptions(false)}
      >
        <ModalHeader toggler={() => setShowMoreOptions(false)}>
          More
        </ModalHeader>
        <ModalBody>
          <div className='grid text-center space-y-7'>
            <span onClick={() => router.push('/')} className='moreOptions'>
              <HomeIcon className='headerOptionsIcon' />
              <h4 className='moreOptionsTitle'>Home</h4>
            </span>
            <span
              onClick={() => router.push('/scores')}
              className='moreOptions'
            >
              <Icon name='sports_score' />
              <h4 className='moreOptionsTitle'>Scores</h4>
            </span>
            <span onClick={() => router.push('/blog')} className='moreOptions'>
              <BookOpenIcon className='headerOptionsIcon' />
              <h4 className='moreOptionsTitle'>Blog</h4>
            </span>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default BlogHeader
