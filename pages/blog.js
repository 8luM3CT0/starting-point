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
import Login from './login'
//back-end
import { useState } from 'react'
import { store, auth } from '../firebaseFile'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import firebase from 'firebase'
import { useRouter } from 'next/router'

function Blog () {
  const [user] = useAuthState(auth)
  if (!user) return <Login />
  const router = useRouter()
  const { id } = router.query
  const [shareText, setShareText] = useState(false)
  const [sharePhoto, setSharePhoto] = useState(false)
  const [shareVideo, setShareVideo] = useState(false)
  const [blogPost, setBlogPost] = useState('')

  const createBlogPost = () => {
    if (!blogPost) return

    store
      .collection('userBlogs')
      .doc(user.email)
      .collection('blogs')
      .add({
        fileName: blogPost,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
    setShareText(false)
    setBlogPost('')
  }

  //return docs from userDocs
  const [docsSnapshot] = useCollection(
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
          <form
            className='
          flex-grow 
          p-[70px]
          mb-5
          space-y-5 
          border-y 
          border-teal-500'
          >
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
          </form>
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
    </>
  )
}

export default Blog
