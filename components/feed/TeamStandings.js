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
  const [showMoreStandings, setShowMoreStandings] = useState(false)

  const showFullTeamStanding = () => {
    setShowMoreStandings(true)
    setShowModal(false)
  }

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
              {result.City || result.Team}
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
            onClick={e => showFullTeamStanding(true)}
            ripple='light'
          >
            More details
          </Button>
        </ModalFooter>
      </Modal>
      <Modal
        size='lg'
        active={showMoreStandings}
        toggler={() => setShowModal(false)}
      >
        <ModalHeader toggler={() => setShowMoreStandings(false)}>
          <h3
            className='
          text-teal-900 
          text-lg 
          space-x-6 
          flex 
          items-center 
          font-semibold 
          font-google-sans'
          >
            Stats
          </h3>
        </ModalHeader>
        <ModalBody>
          <div
            className='
            p-8
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
            text-teal-500'
            >
              <h3 className='font-bold text-[30px]'>{result.City}</h3>
              {'  '}
              {'  '}
              <h2 className='font-bold text-[30px]'>{result.Name}</h2>
            </div>
            {/**The division and the conference */}
            {/**city and name tag end */}
            <div className='flex items-center space-x-4 text-center'>
              <div className='grid text-center space-y-4'>
                <h1
                  className='
              flex 
              font-bold 
              text-xl
              space-x-3 
              text-center 
              text-gray-800'
                >
                  Division -- {result.Division}
                </h1>
                <h2 className='flex text-center text-gray-900 font-hind-font font-light text-sm'>
                  Division wins: {result.DivisionWins}
                </h2>
                <h2 className='flex text-center text-gray-900 font-hind-font font-light text-sm'>
                  Division losses: {result.DivisionLosses}
                </h2>
              </div>
              <div className='grid text-center space-y-4'>
                {result.Conference ? (
                  <h1
                    className='
              flex
              font-bold
              text-xl
              space-x-3 
              text-center 
              text-gray-800'
                  >
                    Conference -- {result.Conference}
                  </h1>
                ) : (
                  ' '
                )}
                {result.ConferenceWins ? (
                  <h2
                    className='
                                  flex 
                                  text-center 
                                  text-gray-900 
                                  font-hind-font 
                                  font-light 
                                  text-sm'
                  >
                    Conference wins: {result.ConferenceWins}
                  </h2>
                ) : (
                  ' '
                )}
                {result.ConferenceLosses ? (
                  <h2
                    className='
                                  flex 
                                  text-center 
                                  text-gray-900 
                                  font-hind-font 
                                  font-light 
                                  text-sm'
                  >
                    Conference losses: {result.ConferenceLosses}
                  </h2>
                ) : (
                  ' '
                )}
              </div>
            </div>
            <div
              className='
            grid 
            space-y-3
            text-center 
            items-center 
            place-items-center'
            >
              <div className='flex items-center space-x-7'>
                <div className='grid text-center space-y-4'>
                  <h1
                    className='
                text-xl 
                font-robot-slab 
                font-semibold 
                flex 
                items-center 
                space-x-5 
                text-blue-300'
                  >
                    Total wins: {'  '} {result.Wins}
                  </h1>
                  {result.HomeWins ? (
                    <h2
                      className='
                                  text-[18px]
                                 font-robot-slab 
                                 font-light
                                 flex 
                                 items-center 
                                 space-x-3 
                                 text-blue-500'
                    >
                      Home wins : {result.HomeWins}
                    </h2>
                  ) : (
                    ''
                  )}
                  {result.AwayWins ? (
                    <h2
                      className='
                text-[18px]
               font-robot-slab 
               font-light
               flex 
               items-center 
               space-x-3 
               text-blue-500'
                    >
                      Away wins : {result.AwayWins}
                    </h2>
                  ) : (
                    ''
                  )}
                </div>
                <div
                  className='
                  grid
                  text-center
                  space-y-4
                '
                >
                  <h1
                    className='
                  text-xl 
                  font-robot-slab 
                  font-semibold 
                  flex 
                  items-center 
                  space-x-5 
                  text-red-400'
                  >
                    Total losses: {'  '} {result.Losses}
                  </h1>
                  {result.HomeLosses ? (
                    <h2
                      className='
                                    text-[18px]
                                   font-robot-slab 
                                   font-light
                                   flex 
                                   items-center 
                                   space-x-3 
                                   text-red-500'
                    >
                      Home losses : {result.HomeLosses}
                    </h2>
                  ) : (
                    ' '
                  )}
                  {result.AwayLosses ? (
                    <h2
                      className='
                    text-[18px]
                   font-robot-slab 
                   font-light
                   flex 
                   items-center 
                   space-x-3 
                   text-red-500'
                    >
                      Away losses : {result.AwayLosses}
                    </h2>
                  ) : (
                    ' '
                  )}
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color='red'
            buttonType='link'
            onClick={e => setShowMoreStandings(false)}
            ripple='dark'
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
})

export default TeamStandings
