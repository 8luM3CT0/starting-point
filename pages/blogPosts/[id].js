//front-end
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Input from '@material-tailwind/react/Input'
import Login from '../login'
//back-end
import firebase from 'firebase'
import { useEffect, useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocument, useDocumentOnce } from 'react-firebase-hooks/firestore'
import { auth, provider, store, warehouse } from '../../firebaseFile'
import { useRouter } from 'next/router'

function Build () {
  const router = useRouter()
  const [user] = useAuthState(auth)
  if (!user) return <Login />
  const { id } = router.query
  const inputRef = useRef(null)
  const filePicker = useRef(null)
  const [picLocal, setPicLocal] = useState(null)
  const [showText, setShowText] = useState(false)
  const [picOptions, setPicOptions] = useState(false)
  const [picFromUrl, setPicFromUrl] = useState(false)
  const [picUrl, setPicUrl] = useState('')

  const [docSnapshot] = useDocument(
    store
      .collection('userBlogs')
      .doc(user.email)
      .collection('blogs')
      .doc(id)
  )

  const [snapshot, loadingSnapshot] = useDocument(
    store
      .collection('userBlogs')
      .doc(user.email)
      .collection('blogs')
      .doc(id)
  )

  if (!loadingSnapshot & !snapshot?.data()?.fileName) {
    router.replace('/')
  }

  const addPicToBlog = e => {
    const reader = new FileReader()
    if (e.target.value[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = readerEvent => {
      setPicLocal(readerEvent.target.result)
    }

    setPicOptions(false)
  }

  const addPicFromUrl = () => {
    {
      /**returns pic from url */
    }
  }

  const removePic = () => {
    setPicLocal(null) || setPicFromUrl('')
  }

  const getPicFromWeb = () => {
    setPicFromUrl(true)
    setPicOptions(false)
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
          blogText: inputRef.current.value,
          fileName: snapshot?.data()?.fileName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          blogSubject: picLocal
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
          fileName: snapshot?.data()?.fileName,
          author: user?.displayName,
          blogContent: inputRef.current.value,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          subjectPic: picLocal
        },
        {
          merge: true
        }
      )
      router.push('/blog')
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
            <Button
              color='teal'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
              onClick={() => router.push('/blog')}
              className='flex items-center space-x-4'
            >
              <Icon name='arrow_back_ios' />
            </Button>
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
      pb-[100px]
      bg-gray-600
      '
        >
          {!picLocal ? (
            <Button
              onClick={e => setPicOptions(true)}
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
          ) : (
            <img
              onClick={removePic}
              src={picLocal}
              alt=''
              className='h-[320px] mx-auto w-[560px] p-10 hover:opacity-80'
            />
          )}
          <div
            className='
            h-[414px]
            md:h-[780px]
            lg:h-[860px]
          overflow-y-scroll 
          scrollbar-hide
          rounded-2xl 
          shadow-2xl 
          mx-auto 
          max-w-6xl 
          bg-gray-800'
          >
            <Button
              color='teal'
              type='button'
              onClick={e => setShowText(true)}
              ripple='light'
            >
              <h1 className='font-light capitalize text-lg font-robot-condensed'>
                Show the text
              </h1>
            </Button>
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
      <Modal size='lg' active={showText} toggler={() => setShowText(false)}>
        <ModalHeader toggler={() => setShowText(false)}>
          <h3 className='text-xl text-blue-400 font-medium'>
            Your old text, {user?.displayName}
          </h3>
        </ModalHeader>
        <ModalBody>
          <p className='text-base font-font-robot leading-relaxed text-gray-900 font-normal'>
            {snapshot?.data()?.blogText}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setShowText(false)}
            color='red'
            buttonType='link'
            block={false}
            iconOnly={false}
            rounded={false}
            ripple='light'
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
      <Modal size='lg' active={picOptions} toggler={() => setPicOptions(false)}>
        <ModalBody>
          <div className='flex items-center space-x-5 p-[100px]'>
            <Button
              onClick={e => setPicFromUrl(true)}
              color='teal'
              buttonType='link'
              iconOnly={false}
              rounded={false}
              block={false}
              className='border-2 grid  border-teal-400'
            >
              <Icon name='http' />
              <h2 className='text-lg capitalize font-medium font-source-serif'>
                Get from web
              </h2>
            </Button>
            <Button
              onClick={() => filePicker.current.click()}
              color='teal'
              buttonType='link'
              iconOnly={false}
              rounded={false}
              block={false}
              className='border-2 grid border-teal-400'
            >
              <Icon name='insert_photo' />
              <h2 className='text-lg capitalize font-medium font-source-serif'>
                Get from desktop
              </h2>
              <input
                type='file'
                ref={filePicker}
                hidden
                onChange={addPicToBlog}
              />
            </Button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color='red'
            type='button'
            rounded={false}
            block={false}
            iconOnly={false}
            onClick={e => setPicOptions(false)}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Modal>
        <Modal
          size='lg'
          active={picFromUrl}
          toggler={() => setPicFromUrl(false)}
        >
          <ModalHeader>
            <h1 className='text-lg font-robot-slab font-medium text-teal-500'>
              Get pic from the web
            </h1>
          </ModalHeader>
          <ModalBody>
            <form className='flex-grow p-[70px] mb-5 space-y-5 border-y border-teal-500'>
              <Input
                type='text'
                color='blue'
                value={picUrl}
                onChange={e => setPicUrl(e.target.value)}
                size='lg'
                outline={false}
                placeholder='Photo url...'
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              color='red'
              buttonType='link'
              onClick={e => setPicFromUrl(false)}
            >
              Cancel
            </Button>
            <Button
              color='teal'
              buttonType='link'
              onClick={e => setPicFromUrl(false)}
            >
              Add
            </Button>
          </ModalFooter>
        </Modal>
      </Modal>
    </>
  )
}

export default Build
