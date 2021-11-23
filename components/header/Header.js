//front-end
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import HeaderScorecard from './HeaderScorecard'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
//back-end
import { auth, store, provider } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function Header ({ results }) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  {
    /*const signIn = e => {
    e.preventDefault()

    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth => {
      router.push('/')
    })
  }
*/
  }
  const logInWithGoogle = () => {
    auth.signInWithPopup(provider).catch(alert)
  }

  const logOut = () => {
    auth.signOut()
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

  const [showModal, setShowModal] = useState(false)

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
          cursor-pointer
          hover:animate-pulse
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
              <h2 className='username'>Sign in</h2>
            </Button>
            <Modal
              size='sm'
              active={showModal}
              toggler={() => setShowModal(false)}
            >
              <ModalHeader toggler={() => setShowModal(false)}>
                Sign In
              </ModalHeader>
              <ModalBody>
                <p className='text-base leading-relaxed text-gray-600 font-normal'>
                  Email
                </p>
                <input
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
                  type='password'
                  className='
                border 
                text-gray-800
                border-blue-100 
                rounded-lg outline-none 
                bg-gray-50'
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color='red'
                  buttonType='link'
                  onClick={e => setShowModal(false)}
                  ripple='dark'
                >
                  Cancel
                </Button>

                <Button
                  color='green'
                  onClick={e => setShowModal(false)}
                  ripple='light'
                >
                  Sign In
                </Button>
              </ModalFooter>
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
            <img
              src={user?.photoURL}
              alt=''
              className='h-10 rounded-3xl border border-blue-400'
            />
            <h2 className='username ml-3'>{user?.displayName}</h2>
          </div>
        )}
      </div>
      <div
        className='
        flex-1
        scrollbar-hide
        overflow-x-scroll
        whitespace-nowrap 
        flex
        items-center
        space-x-10
        py-5
        px-6
        text-gray-50
      bg-gray-600'
      >
        {results.slice(0, 17).map(result => (
          <HeaderScorecard key={result.id} result={result} />
        ))}
      </div>
    </header>
  )
}

export default Header
