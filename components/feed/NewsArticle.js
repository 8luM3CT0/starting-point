//front-end
import { forwardRef } from 'react'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Button from '@material-tailwind/react/Button'
//back-end
import { useState } from 'react'

const NewsArticle = forwardRef(({ result }, ref) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div
      onClick={e => setShowModal(true)}
      className='
      max-w-[740px]
        text-blue-400 
        font-semibold 
        font-hind-font
        text-lg 
        my-4
        flex-grow
        mx-5
        flex
        items-center
        justify-evenly
        cursor-pointer
        '
    >
      <h3
        className='
         hover:underline 
         flex-grow
         max-w-[640px]
         hover:animate-pulse'
      >
        {result.Title}
      </h3>
      <h5
        className='
      text-gray-500 
      text-sm 
      font-medium 
      ml-5'
      >
        by {result.OriginalSource}
      </h5>

      <Modal size='lg' active={showModal} toggler={() => setShowModal(false)}>
        <ModalHeader toggler={() => setShowModal(false)}>
          <div className='flex space-x-10 justify-evenly items-center'>
            {result.Title}
            <p className='text-gray-500 ml-3 text-sm font-light'>
              {' '}
              by {result.OriginalSource}
            </p>
          </div>
        </ModalHeader>
        <ModalBody>
          <p className='text-base leading-relaxed text-gray-600 font-normal'>
            {result.Content}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color='red'
            buttonType='link'
            onClick={e => setShowModal(false)}
            ripple='dark'
          >
            Close
          </Button>

          {/*<Button
            color='green'
            onClick={e => setShowModal(false)}
            ripple='light'
          >
            Read more
          </Button>
          */}
        </ModalFooter>
      </Modal>
    </div>
  )
})
export default NewsArticle
