//front-end
import { forwardRef } from 'react'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Button from '@material-tailwind/react/Button'
//back-end
import { useState } from 'react'

const TeamStandings = forwardRef(({ result }, ref) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div
        onClick={e => setShowModal(true)}
        className='
      cursor-pointer
      hover:bg-gray-700
        grid
        px-7
        border
        border-gray-600
        place-items-center
        justify-evenly
        bg-gray-800
        '
      >
        <div
          className='
      text-center 
      grid 
      items-center 
      justify-center 
      space-y-10'
        >
          <div
            className='
        flex 
        items-center 
        justify-evenly
        text-center 
        space-x-2'
          >
            <h3
              className='
          text-gray-300 
          font-medium
          text-xl '
            >
              {result.Name}
            </h3>
          </div>
          <div
            className='
        grid
        text-center'
          >
            <h4
              className='
            flex
            items-center
            text-lg
            font-[400]
          text-blue-200'
            >
              Wins - {result.Wins}
            </h4>
            <h4
              className='
            flex
            items-center
            text-lg
            font-[400]
          text-red-400'
            >
              Losses - {result.Losses}
            </h4>
          </div>
        </div>
      </div>
      <Modal size='sm' active={showModal} toggler={() => setShowModal(false)}>
        <ModalHeader toggler={() => setShowModal(false)}>
          Modal Title
        </ModalHeader>
        <ModalBody color='lightblue'>
          <p className='text-base leading-relaxed text-gray-600 font-normal'>
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! They're
            slowed down by their perception of themselves. If you're taught you
            can’t do anything, you won’t do anything. I was taught I could do
            everything.
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

          <Button
            color='green'
            onClick={e => setShowModal(false)}
            ripple='light'
          >
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
})

export default TeamStandings
