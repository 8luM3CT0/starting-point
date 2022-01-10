//front-end
import Head from 'next/head'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import { UserIcon } from '@heroicons/react/solid'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import moment from 'moment'
//back-end
import { useState, useRef, useEffect } from 'react'
import { store, auth } from '../../firebaseFile'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  useCollection,
  useDocument,
  useDocumentOnce
} from 'react-firebase-hooks/firestore'
import firebase from 'firebase'
import { useRouter } from 'next/router'

function Post () {
  const router = useRouter()
  const [user] = useAuthState(auth)
  const { id } = router.query
  const [showTitle, setShowTitle] = useState(false)

  const [snapshot, loadingSnapshot] = useDocument(
    store.collection('blogCollection').doc(id)
  )

  if (!loadingSnapshot && !snapshot?.data()?.fileName) {
    router.replace('/')
  }

  return (
    <>
      <div
        className='
        h-screen
        overflow-hidden
        scrollbar-hide
        bg-[#2d3642]
        pb-8
        '
      >
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
        justify-evenly
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
                  onClick={e => router.push('/')}
                  color='#1f2937'
                  buttonType='solid'
                  iconOnly={true}
                  ripple='light'
                  size='3xl'
                  className='border-0 h-[50px] '
                >
                  <div className='flex items-center text-center space-x-3'>
                    <Icon color='teal' name='home' className='pr-4 h-[50px]' />
                  </div>
                </Button>
              </div>
              <div
                onClick={e => setShowTitle(true)}
                className='ml-5 flex space-x-5 items-center'
              >
                <Icon
                  name='article'
                  color='teal'
                  className='text-xl'
                  size='3xl'
                />
                <h1 className='blogPageTitle'>
                  Blog article by
                  <h4 className='ml-4 text-lg text-blue-200 font-google-sans font-semibold'>
                    {snapshot?.data()?.author}
                  </h4>
                </h1>
              </div>
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
        <Modal size='regular' active={showTitle}></Modal>
        <main
          className='
            max-w-7xl
            pb-[120px]
            space-y-4
            h-screen
            overflow-y-scroll
            scrollbar-hide
            border-x
            border-teal-200
            bg-gray-600
            mx-auto
            '
        >
          <img
            src={snapshot?.data()?.subjectPic}
            alt=''
            className='picSubjectDoc'
          />
          <div
            className='
          mx-auto 
          space-y-4
          justify-center
          items-center
          text-center
          '
          >
            <h1
              className='
          mx-auto 
           text-teal-500 
           font-bold 
           text-2xl 
           font-robot-slab'
            >
              {snapshot?.data()?.fileName}
            </h1>
            <h2
              className='
            text-blue-200 
            font-normal 
            text-xl 
            font-font-robot'
            >
              by {snapshot?.data()?.author}
            </h2>
          </div>
          <div
            className='
            bg-gray-800 
            pb-[120px]
            h-[790px]
            max-w-2xl 
            md:max-w-5xl
            mx-auto
            text-ellipsis
            line-clamp-3
          '
          >
            <p className='text-blue-100 p-12 text-xl'>
              {snapshot?.data()?.blogContent}
            </p>
          </div>
        </main>
      </div>
      <Modal
        size='regular'
        active={showTitle}
        toggler={() => setShowTitle(false)}
      >
        <ModalHeader>
          <h1
            className='
            capitalize 
            text-teal-500 
            font-robot-condensed 
            font-normal 
            text-xl'
          >
            Article title
          </h1>
        </ModalHeader>
        <ModalBody>
          <div
            className='
            p-[84px] 
            space-y-5
            grid 
            place-items-center'
          >
            <span
              className='
                flex 
                text-center 
                space-x-4 '
            >
              <h2
                className='
                    text-lg 
                    font-semibold 
                    text-blue-300'
              >
                Title :
              </h2>
              <h4 className='articleTitle'>{snapshot?.data()?.fileName}</h4>
            </span>
            <span
              className='
            flex 
            text-center 
            space-x-4'
            >
              <h2
                className='
                text-lg 
                font-semibold 
                text-blue-300'
              >
                Author :
              </h2>
              <h4 className='font-robot-slab text-[13px] lg:text-[20px] font-normal text-teal-700'>
                {snapshot?.data()?.author}
              </h4>
            </span>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color='red'
            buttonType='link'
            iconOnly={false}
            block={false}
            rounded={false}
            onClick={e => setShowTitle(false)}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Post
