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
      <Modal
        size='regular'
        active={showModal}
        toggler={() => setShowModal(false)}
      >
        <ModalHeader toggler={() => setShowModal(false)}>
          Team Standings
        </ModalHeader>
        <ModalBody>
          <div
            className='
          grid 
          space-y-7
          text-center 
          items-center 
          place-items-center'
          >
            {/**city and name */}
            <div
              className='
            space-x-6
            flex 
            text-center 
            place-items-center 
            items-center 
            text-[#45a29e]'
            >
              <h3 className='font-semibold text-[22px]'>{result.City}</h3>
              {'  '}
              {'  '}
              <h2 className='font-bold text-[24px]'>{result.Name}</h2>
            </div>
            {/**city and name tag end */}
            <div
              className='
            grid 
            space-y-3
            text-center 
            items-center 
            place-items-center'
            >
              <h4 className='text-base font-[20px] flex items-center space-x-5 text-blue-300'>
                Wins: {'  '} {result.Wins}
              </h4>
              <h4 className='text-base font-[20px] flex items-center space-x-5 text-red-500'>
                Losses: {'  '} {result.Losses}
              </h4>
            </div>
          </div>
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
            color='lightBlue'
            onClick={e => setShowModal(false)}
            ripple='light'
          >
            More details
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
})

export default TeamStandings
