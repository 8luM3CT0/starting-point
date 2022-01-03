//front-end
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Login from '../login'
//back-end
import firebase from 'firebase'
import { useEffect, useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocument, useDocumentOnce } from 'react-firebase-hooks/firestore'
import { auth, provider, store, storage } from '../../firebaseFile'
import { useRouter } from 'next/router'

function Build () {
  const router = useRouter()
  const [user] = useAuthState(auth)
  if (!user) return <Login />
  const { id } = router.query
  const inputRef = useRef(null)
  const filePicker = useRef(null)

  const [docSnapshot] = useDocument(
    store
      .collection('userBlogs')
      .doc(user.email)
      .collection('blogs')
      .doc(id)
  )

  const [snapshot, loadingSnapshot] = useDocumentOnce(
    store
      .collection('userBlogs')
      .doc(user.email)
      .collection('blogs')
      .doc(id)
  )

  if (!loadingSnapshot & !snapshot?.data()?.fileName) {
    router.replace('/')
  }

  const publishBlog = e => {
    e.preventDefault()

    if (!inputRef.current.value) return

    store
      .collection('userBlogs')
      .doc(user.email)
      .collection('blogs')
      .doc(id)
      .set(
        {
          blogText: inputRef.current.value
        },
        {
          merge: true
        }
      )

    store
      .collection('blogCollection')
      .doc(id)
      .set(
        {
          title: snapshot?.data()?.fileName,
          author: user?.displayName,
          blogContent: inputRef.current.value,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        },
        {
          merge: true
        }
      )
  }

  return (
    <>
      <div
        className='
        h-screen 
        overflow-hidden 
        scrollbar-hide 
        pb-[120px] 
        bg-[#2d3642]'
      >
        <header
          className='
            top-0
            z-50
            sticky
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
            hover:animate-pulse 
            flex 
            items-center 
            space-x-8'
            >
              <Button
                color='teal'
                buttonType='link'
                size='regular'
                rounded={false}
                block={false}
                iconOnly={false}
                ripple='dark'
                onClick={() => router.push('/blog')}
                className='flex items-center space-x-5'
              >
                <Icon name='drafts' size='3xl' />
                <h3 className='font-light text-lg capitalize'>
                  {snapshot?.data()?.fileName}
                </h3>
              </Button>
            </div>
            <Button
              color='teal'
              buttonType='link'
              size='regular'
              rounded={false}
              block={false}
              iconOnly={false}
              ripple='dark'
              className='flex items-center space-x-3'
            >
              <img
                src={user?.photoURL}
                alt=''
                className='h-10 rounded-3xl border-teal-100 border'
              />
              <h4 className='username capitalize ml-3 text-teal-300'>
                {user?.displayName}
              </h4>
            </Button>
          </div>
        </header>
        <main
          className='
        max-w-7xl
        mx-auto
      h-screen
      overflow-y-scroll
      scrollbar-hide
      pb-14
      bg-gray-600
      '
        >
          <Button
            color='teal'
            buttonType='filled'
            size='lg'
            rounded={false}
            block={true}
            iconOnly={false}
            ripple='light'
            className='flex items-center space-x-5 mb-[72px]'
          >
            <Icon name='add_a_photo' />
            <h2
              className='
          text-lg 
          capitalize 
          font-medium 
          font-google-sans'
            >
              Add your subject
            </h2>
          </Button>
          <div
            className='
            h-[414px]
            md:h-[780px]
            lg:h-[1080px] 
          overflow-y-scroll 
          scrollbar-hide
          rounded-2xl 
          shadow-2xl 
          mx-auto 
          max-w-6xl 
          bg-gray-800'
          >
            <textarea
              ref={inputRef}
              placeholder={`Add something, ${user?.displayName}...`}
              type='text'
              className='font-robot-slab
              p-12 
              text-lg 
              h-full 
              w-full 
              border-0 
              outline-none 
              text-teal-200 
              line-clamp-3 
              bg-transparent'
            />
          </div>
          <Button
            onClick={publishBlog}
            color='teal'
            buttonType='filled'
            size='lg'
            block={true}
            iconOnly={false}
            rounded={false}
            ripple='light'
            className='
            bottom-0 
            z-50 
            sticky
            p-14
            mt-5
            '
          >
            Publish
          </Button>
        </main>
      </div>
    </>
  )
}

export default Build
