//front-end
import { forwardRef } from 'react'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Button from '@material-tailwind/react/Button'
//back-end
import { useState } from 'react'

const HeaderScorecard = forwardRef(({ result }, ref) => {
  const [showModal, setShowModal] = useState(false)
  return (
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
  )
})

export default HeaderScorecard
