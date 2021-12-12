//front-end
import { forwardRef } from 'react'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Button from '@material-tailwind/react/Button'
import moment from 'moment'
//back-end
import { useState } from 'react'

const HeaderScorecard = forwardRef(({ result }, ref) => {
  const [showModal, setShowModal] = useState(false)
  const [showScoreDetails, setShowScoreDetails] = useState(false)

  const setShowScore = () => {
    setShowModal(false)
    setShowScoreDetails(true)
  }

  return (
    <>
      <div
        onClick={e => setShowModal(true)}
        className='
    flex
    items-center
    space-x-8
    px-4
    py-3
    border
    border-gray-700
    bg-gray-600
    hover:animate-pulse
    cursor-pointer
    rounded-lg
    '
      >
        <div
          className='
      grid
      '
        >
          <h4 className='teamName text-blue-100'>{result.HomeTeam}</h4>
          <h2 className='teamScore text-blue-300'>
            {result.HomeTeamScore || result.HomeScore || result.HomeTeamRuns}
          </h2>
        </div>
        <div
          className='
      grid
      '
        >
          <h4 className='teamName text-red-300'>{result.AwayTeam}</h4>
          <h2 className='teamScore text-red-500'>
            {result.AwayTeamScore || result.AwayScore || result.AwayTeamRuns}
          </h2>
        </div>
      </div>
      <Modal
        className='bg-gray-800'
        size='lg'
        active={showModal}
        toggler={() => setShowModal(false)}
      >
        <div className='justify-evenly  grid items-center text-center'>
          <ModalHeader toggler={() => setShowModal(false)}>
            <span className='flex items-center space-x-6 text-gray-800'>
              <h3 className='text-lg font-semibold font-google-sans'>
                {result.HomeTeam}
              </h3>
              <h3 className='text-sm font-light'>against</h3>
              <h3 className='text-lg font-semibold font-google-sans'>
                {result.AwayTeam}
              </h3>
            </span>
          </ModalHeader>
          <ModalBody>
            <div
              className='
          grid
          text-center
          place-items-center
          '
            >
              <div
                className='
      flex space-x-10 items-center text-center justify-evenly
      '
              >
                <h4 className='font-semibold text-[20px] text-blue-600'>
                  {result.HomeTeam}
                </h4>{' '}
                <h2 className='font-normal text-blue-400 text-[12px]'>
                  with a score of{' '}
                </h2>{' '}
                <h2 className='font-semibold text-[32px] text-blue-800'>
                  {result.HomeTeamScore ||
                    result.HomeScore ||
                    result.HomeTeamRuns}
                </h2>
              </div>
              <div
                className='
      flex space-x-10 items-center text-center justify-evenly
      '
              >
                <h4 className='font-semibold text-[20px] text-red-600'>
                  {result.AwayTeam}
                </h4>{' '}
                <h2 className='font-normal text-red-500 text-[12px]'>
                  with a score of{' '}
                </h2>{' '}
                <h2 className='font-semibold text-[32px] text-red-800'>
                  {result.AwayTeamScore ||
                    result.AwayScore ||
                    result.AwayTeamRuns}
                </h2>
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

            <Button color='green' onClick={e => setShowScore()} ripple='light'>
              Read more
            </Button>
          </ModalFooter>
        </div>
      </Modal>
      <Modal
        className='bg-gray-800'
        size='lg'
        active={showScoreDetails}
        toggler={() => setShowScoreDetails(false)}
      >
        <div className='justify-evenly p-7 grid items-center text-center'>
          <ModalHeader toggler={() => setShowScoreDetails(false)}>
            <span className='flex items-center space-x-6 text-gray-800'>
              <h3 className='text-lg font-semibold font-google-sans'>
                Season:{' '}
              </h3>
              <h3 className='text-lg font-semibold font-google-sans'>
                {result.Season} -- {result.Status}
              </h3>
            </span>
          </ModalHeader>
          <ModalBody>
            <div
              className='
          grid
          text-center
          place-items-center
          space-y-6
          '
            >
              <div
                className='
      flex space-x-10 items-center text-center justify-evenly
      '
              >
                <h4 className='font-semibold text-[20px] text-blue-600'>
                  {result.HomeTeam}
                </h4>{' '}
                <h2 className='font-normal text-blue-400 text-[12px]'>--- </h2>{' '}
                <h2 className='font-semibold text-[32px] text-blue-800'>
                  {result.HomeTeamScore ||
                    result.HomeScore ||
                    result.HomeTeamRuns}
                </h2>
              </div>
              <div
                className='
      flex space-x-10 items-center text-center justify-evenly
      '
              >
                <h4 className='font-semibold text-[20px] text-red-600'>
                  {result.AwayTeam}
                </h4>{' '}
                <h2 className='font-normal text-red-500 text-[12px]'>--- </h2>{' '}
                <h2 className='font-semibold text-[32px] text-red-800'>
                  {result.AwayTeamScore ||
                    result.AwayScore ||
                    result.AwayTeamRuns}
                </h2>
              </div>
              <h4
                className='
                  text-xl
                  text-teal-400
                  my-5
                    p-2
                  '
              >
                {result.DateTime
                  ? moment(result.GameEndDateTime).format('LT')
                  : '...'}
              </h4>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className='mt-5'>
              <Button
                color='teal'
                buttonType='link'
                onClick={e => setShowScoreDetails(false)}
                ripple='dark'
              >
                Close
              </Button>
            </div>
          </ModalFooter>
        </div>
      </Modal>
    </>
  )
})

export default HeaderScorecard
