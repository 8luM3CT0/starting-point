//front-end
import Head from 'next/head'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Input from '@material-tailwind/react/Input'
//header posting
import Tab from '@material-tailwind/react/Tab'
import TabList from '@material-tailwind/react/TabList'
import TabItem from '@material-tailwind/react/TabItem'
import BlogHeader from '../components/header/BlogHeader'
//back-end
import { useState } from 'react'
import { store, auth } from '../firebaseFile'
import { useAuthState } from 'react-firebase-hooks/auth'
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

  return (
    <>
      <div className='scrollbar-hide h-screen overflow-hidden bg-[#2d3642] pb-8'>
        <Head>
          <title>Here's our blog, take your time.</title>
        </Head>
        <BlogHeader />
        <div
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
          <h1 className='text-[20px] font-normal text-teal-500'>
            This place looks so empty. Change that by adding a post
          </h1>
        </div>
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
