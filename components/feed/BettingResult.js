//front-end
import { forwardRef } from 'react'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Button from '@material-tailwind/react/Button'
//back-end
import { useState } from 'react'
import { useRouter } from 'next/router'

const BettingResult = forwardRef(({ result }, ref) => {
  const router = useRouter()
  const [showBettingModal, setShowBettingModal] = useState(false)
  const [showMoreDetails, setShowMoreDetails] = useState(false)

  const showMore = () => {
    setShowMoreDetails(true)
    setShowBettingModal(false)
  }

  return (
    <>
      <div
        onClick={e => setShowBettingModal(true)}
        className='
        flex 
        items-center 
        justify-evenly 
        px-6
        py-4
        space-x-7 
        rounded-lg
        hover:bg-[#c2f0ec]  
        hover:scale-105
        hover:transition
        duration-150 
        cursor-pointer
        my-5 '
      >
        {result.Name ? (
          <h3
            className='
          text-sm
          sm:text-base 
          lg:text-2xl 
            text-yellow-400 
            font-semibold'
          >
            {result.Name}
          </h3>
        ) : (
          <h3
            className='
          flex
          text-center
          space-x-7
          text-sm
          sm:text-base 
          lg:text-2xl 
            text-yellow-400 
            font-semibold'
          >
            {result.AwayTeam} @ {result.HomeTeam}
          </h3>
        )}
        <span
          className='
          space-x-6  
          lg:space-x-10
            text-lg 
            font-medium 
            flex 
            items-center
            text-center'
        >
          <h4 className='text-[14px] lg:text-xl text-gray-800'>Teams: </h4>
          <h5
            className='
            text-sm
                sm:text-base 
                text-blue-300 
                font-normal'
          >
            {result.HomeTeam} - {result.HomeTeamScore}
          </h5>
          <h4 className='text-[14px] lg:text-xl text-gray-800'>vs</h4>
          <h5
            className='
                text-sm
                sm:text-base 
                text-red-500 
                font-normal'
          >
            {result.AwayTeam} - {result.AwayTeamScore}
          </h5>
        </span>
      </div>
      <Modal
        size='regular'
        active={showBettingModal}
        toggler={() => setShowBettingModal(false)}
      >
        <ModalHeader color='teal' toggler={() => setShowBettingModal(false)}>
          Bet Event
        </ModalHeader>
        <ModalBody>
          <div
            className='
          grid
          font-google-sans
          space-y-7
          justify-evenly
          text-center
          items-center '
          >
            <span className='flex items-center text-center space-x-6'>
              <h3 className='text-xl text-yellow-400 font-semibold'>Teams: </h3>{' '}
              <h4 className='text-lg text-blue-300 font-bold'>
                {result.HomeTeam}
              </h4>{' '}
              <h3 className='text-xl text-yellow-400 font-semibold'>vs</h3>{' '}
              <h4 className='text-lg text-red-500 font-bold'>
                {result.AwayTeam}
              </h4>
            </span>
            <span className='flex items-center text-center space-x-6'>
              <h3 className='text-xl text-yellow-800 font-medium'>Scores: </h3>{' '}
              <h4 className='text-lg text-blue-300 font-bold'>
                {result.HomeTeamScore}
              </h4>{' '}
              <h3 className='text-xl text-yellow-400 font-semibold'>--</h3>{' '}
              <h4 className='text-lg text-red-500 font-bold'>
                {result.AwayTeamScore}
              </h4>
            </span>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color='blue'
            buttonType='link'
            onClick={e => setShowBettingModal(false)}
            ripple='dark'
          >
            Close
          </Button>

          <Button color='teal' onClick={e => showMore()} ripple='light'>
            More details
          </Button>
        </ModalFooter>
      </Modal>
      <Modal
        size='lg'
        active={showMoreDetails}
        toggler={() => setShowMoreDetails(false)}
      >
        <div className='grid items-center p-10'>
          <ModalHeader toggler={() => setShowMoreDetails(false)}>
            {result.Name ? (
              <h1
                className='
            text-yellow-400 
            font-bold 
            font-google-sans'
              >
                {result.Name}
              </h1>
            ) : (
              <h1
                className='
            text-yellow-400 
            font-bold 
            font-google-sans'
              >
                {result.AwayTeam} @ {result.HomeTeam}
              </h1>
            )}
          </ModalHeader>
          <ModalBody>
            <div
              className='
            grid 
            items-center
            mx-auto 
            p-[180px] 
            '
            >
              {result.Season ? (
                <h4
                  className='
                              text-gray-800 
                              font-robot-slab
                              font-semibold 
                              text-2xl'
                >
                  Season: {result.Season}
                </h4>
              ) : (
                ' '
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color='red'
              buttonType='link'
              onClick={e => setShowMoreDetails(false)}
              ripple='dark'
            >
              Close
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  )
})

export default BettingResult
