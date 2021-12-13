//front-end
import Head from 'next/head'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
//header posting
import Tab from '@material-tailwind/react/Tab'
import TabList from '@material-tailwind/react/TabList'
import TabItem from '@material-tailwind/react/TabItem'
import BlogHeader from '../components/header/BlogHeader'
//back-end
import { useState } from 'react'

function Blog () {
  const [shareText, setShareText] = useState(false)
  const [sharePhoto, setSharePhoto] = useState(false)
  const [shareVideo, setShareVideo] = useState(false)

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
      border-l
      border-r
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
        </div>
      </div>
      <Modal
        toggler={() => setShareText(false)}
        size='regular'
        active={shareText}
      >
        <ModalHeader toggler={() => setShareText(false)}>Test</ModalHeader>
        <ModalBody>
          <p className='text-base leading-relaxed text-gray-600 font-normal'>
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! They're
            slowed down by their perception of themselves. If you're taught you
            can’t do anything, you won’t do anything. I was taught I could do
            everything.
          </p>
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
              color='teal'
              onClick={e => setShareText(false)}
              ripple='light'
            >
              Post!
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
      <Modal
        toggler={() => setSharePhoto(false)}
        size='regular'
        active={sharePhoto}
      >
        <ModalHeader toggler={() => setSharePhoto(false)}>Test</ModalHeader>
        <ModalBody>
          <p className='text-base leading-relaxed text-gray-600 font-normal'>
            Here's going to be the photo sharing bit. so the idea is that to put
            the sharing options in a flexbox, items center. Options are either a
            sharign from the device or copy-paste a url.
          </p>
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
        <ModalHeader toggler={() => setShareVideo(false)}>Test</ModalHeader>
        <ModalBody>
          <p className='text-base leading-relaxed text-gray-600 font-normal'>
            Same goes for here, except in a video format. There's probably some
            other stuff here but yeah the whole gist is that the photo sharing
            and video sharing is similar
          </p>
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
