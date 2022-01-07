//front-end
import Head from 'next/head'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Input from '@material-tailwind/react/Input'
import Tab from '@material-tailwind/react/Tab'
import TabList from '@material-tailwind/react/TabList'
import TabItem from '@material-tailwind/react/TabItem'
import BlogHeader from '../components/header/BlogHeader'
import BlogDocument from '../components/feed/blog/BlogDocument'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import Login from './login'
//back-end
import { useRef, useState } from 'react'
import { store, auth } from '../firebaseFile'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  useCollection,
  useDocument,
  useDocumentOnce
} from 'react-firebase-hooks/firestore'
import firebase from 'firebase'
import { useRouter } from 'next/router'

function Blog () {
  const [user] = useAuthState(auth)
  if (!user) return <Login />
  const router = useRouter()
  const { id } = router.query
  const [picOptions, setPicOptions] = useState(false)
  const [shareText, setShareText] = useState(false)
  const [blogPhoto, setBlogPhoto] = useState(false)
  const [blogPost, setBlogPost] = useState('')
  const filePickerRef = useRef(null)
  const filePicker = useRef(null)
  const [blogPic, setBlogPic] = useState(null)

  const addPic = e => {
    const reader = new FileReader()
    if (e.target.value[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = readerEvent => {
      setBlogPic(readerEvent.target.result)
    }
  }

  const addPicToBlog = e => {
    const reader = new FileReader()
    if (e.target.value[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = readerEvent => {
      setBlogPic(readerEvent.target.result)
    }

    setPicOptions(false)
  }

  const getPicFromWeb = () => {
    setPicFromUrl(true)
    setPicOptions(false)
  }

  const removePic = () => {
    setBlogPic(null)
  }

  const createBlogPost = e => {
    e.preventDefault()

    if (!blogPost) return

    store
      .collection('userBlogs')
      .doc(user.email)
      .collection('blogs')
      .add({
        fileName: blogPost,
        userEmail: user.email,
        displayName: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        blogSubject: blogPic
      })
    setShareText(false)
    setBlogPost('')
  }

  //return docs from userDocs
  const [docsSnapshot] = useDocument(
    store
      .collection('userBlogs')
      .doc(user.email)
      .collection('blogs')
      .orderBy('timestamp', 'desc')
  )

  return (
    <>
      <div className='scrollbar-hide h-screen overflow-hidden bg-[#2d3642] pb-8'>
        <Head>
          <title>Here's our blog, {user?.displayName} take your time.</title>
        </Head>
        <BlogHeader />
        <main
          className='
      max-w-7xl
      pb-[120px]
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
            loading='lazy'
            src='https://www.thoughtco.com/thmb/9-TaSUt-qCdOp1Xh3P43mutTmeA=/2121x1414/filters:fill(auto,1)/GettyImages-887987150-5c770377c9e77c00011c82e6.jpg'
            alt=''
            className='
                -mt-[290px]
                md:-mt-[340px] 
                lg:-mt-[560px]              
                  w-[720px] 
                  md:w-full 
                  h-[200px]
                  sm:h-[400px] 
                  lg:h-[620px] 
                  xl:h-[800px]
                  opacity-75'
          />
          <Tab>
            <TabList color='teal'>
              <TabItem
                onClick={e => {
                  setShareText(true)
                }}
                ripple='light'
                className='cursor-pointer space-x-5'
              >
                <Icon name='add_box' size='lg' />
                <h2 className='capitalize font-robot-slab'>New blog ?</h2>
              </TabItem>
            </TabList>
          </Tab>
          {docsSnapshot?.docs.map(doc => (
            <BlogDocument
              key={doc.id}
              id={doc.id}
              fileName={doc.data().fileName}
              timestamp={doc.data().timestamp}
              blogText={doc.data().blogText}
              blogSubject={doc.data().blogSubject}
            />
          ))}
        </main>
      </div>
      {/* End of main div*/}
      <Modal
        toggler={() => setShareText(false)}
        size='regular'
        active={shareText}
      >
        <ModalHeader toggler={() => setShareText(false)}>
          <h3
            className='
          text-[32px] 
          font-medium 
          font-hind-font 
          text-teal-400'
          >
            Add here
          </h3>
        </ModalHeader>
        <ModalBody>
          
            {/**Tailwind input */}
            <Input
              type='text'
              color='lightBlue'
              value={blogPost}
              onChange={e => setBlogPost(e.target.value)}
              size='lg'
              outline={false}
              placeholder='Post name...'
            />
            {!blogPic ? (
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
              src={blogPic}
              alt=''
              className='h-[320px] mx-auto w-[560px] p-10 hover:opacity-80'
            />
            )}
          <ModalFooter>
            <Button
              color='red'
              buttonType='link'
              onClick={e => setShareText(false)}
              ripple='dark'
            >
              Cancel
            </Button>
            <Button
              disabled={!user}
              color='teal'
              onClick={createBlogPost}
              ripple='light'
            >
              Create
            </Button>
          </ModalFooter>
        </ModalBody>
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
    </>
  )
}

export default Blog
