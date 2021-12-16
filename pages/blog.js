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
//back-end
import { useState } from 'react'
import { store, auth } from '../firebaseFile'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import firebase from 'firebase'

function Blog () {
  const [shareText, setShareText] = useState(false)
  const [sharePhoto, setSharePhoto] = useState(false)
  const [shareVideo, setShareVideo] = useState(false)
  const [blogPost, setBlogPost] = useState('')
  const [user] = useAuthState(auth)

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
          <title>Here's our blog, take your time.</title>
        </Head>
        <BlogHeader />
        <main
          className='
      max-w-7xl
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
                className='cursor-pointer'
              >
                <Icon name='text_fields' size='lg' />
                Text
              </TabItem>
              <TabItem
                onClick={e => {
                  setSharePhoto(true)
                }}
                ripple='light'
                className='cursor-pointer'
              >
                <Icon name='add_a_photo' size='lg' />
                Photo
              </TabItem>
              <TabItem
                onClick={e => {
                  setShareVideo(true)
                }}
                ripple='light'
                className='cursor-pointer'
              >
                <Icon name='videocam' size='lg' />
                Video
              </TabItem>
            </TabList>
          </Tab>
          {docsSnapshot?.docs.map(doc => (
            <BlogDocument
              key={doc.id}
              id={doc.id}
              fileName={doc.data().fileName}
              timestamp={doc.data().timestamp}
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
            Add a post
          </h3>
        </ModalHeader>
        <ModalBody>
          <form
            className='
          flex-grow 
          p-7
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
      <Modal
        toggler={() => setSharePhoto(false)}
        size='regular'
        active={sharePhoto}
      >
        <ModalHeader toggler={() => setSharePhoto(false)}>
          <h3 className='text-[32px] font-medium font-hind-font text-blue-400'>
            Share a photo
          </h3>
        </ModalHeader>
        <ModalBody>
          <div className='p-10 space-x-5 flex items-center'>
            <Button>
              <div className='grid border-gray-200 text-center space-y-6'>
                <Icon name='add_photo_alternate' size='xl' />
                <h2 className='text-gray-200 font-google-sans font-light'>
                  import a photo
                </h2>
              </div>
            </Button>
            <Button>
              <div className='grid  border-gray-200 text-center space-y-6'>
                <Icon name='add_a_photo' size='xl' />
                <h2 className='text-gray-200 font-google-sans font-light'>
                  take a picture
                </h2>
              </div>
            </Button>
            <Button>
              <div className='grid border-gray-200 text-center space-y-6'>
                <Icon name='insert_photo' size='xl' />
                <h2 className='text-gray-200 font-google-sans font-light'>
                  add a link
                </h2>
              </div>
            </Button>
          </div>
          <ModalFooter>
            <Button
              color='red'
              buttonType='link'
              onClick={e => setSharePhoto(false)}
              ripple='dark'
            >
              Cancel
            </Button>
            <Button
              color='teal'
              onClick={e => setSharePhoto(false)}
              ripple='light'
            >
              Post!
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
      <Modal
        toggler={() => setShareVideo(false)}
        size='regular'
        active={shareVideo}
      >
        <ModalHeader toggler={() => setShareVideo(false)}>
          <h3 className='text-[32px] font-medium font-hind-font text-blue-400'>
            Add a video
          </h3>
        </ModalHeader>
        <ModalBody>
          <div className='p-10 space-y-5'>
            <p className='text-base leading-relaxed text-gray-600 font-normal'>
              I always felt like I could do anything. That’s the main thing
              people are controlled by! Thoughts- their perception of
              themselves! They're slowed down by their perception of themselves.
              If you're taught you can’t do anything, you won’t do anything. I
              was taught I could do everything.
            </p>
          </div>
          <ModalFooter>
            <Button
              color='red'
              buttonType='link'
              onClick={e => setShareVideo(false)}
              ripple='dark'
            >
              Cancel
            </Button>
            <Button
              color='teal'
              onClick={e => setShareVideo(false)}
              ripple='light'
            >
              Post!
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  )
}

export default Blog
