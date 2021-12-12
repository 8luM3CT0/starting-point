//front-end
import HeaderScorecard from './HeaderScorecard'
import Button from '@material-tailwind/react/Button'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
//modal
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
//back-end
import { useState } from 'react'

function NBAHeaderScores ({ nba_scores }) {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <div
        className='
        flex-1
        scrollbar-hide
        overflow-x-scroll
        whitespace-nowrap 
        flex
        items-center
        space-x-10
        py-5
        px-6
        text-gray-50
      bg-gray-600'
      >
        {nba_scores.slice(0, 20).map(result => (
          <HeaderScorecard key={result.GameID} result={result} />
        ))}
        <div className='p-2 justify-end'>
          <Button
            size='small'
            onClick={e => setShowMore(true)}
            buttonType='link'
            iconOnly={true}
            color='lightBlue'
            ripple='light'
          >
            <ArrowForwardIcon />
          </Button>
        </div>
      </div>
      <Modal size='sm' active={showMore} toggler={() => setShowMore(false)}>
        <ModalHeader toggler={() => setShowMore(false)}>
          More scores
        </ModalHeader>
        <ModalBody>
          <div
            className='
          overflow-x-scroll
          scrollbar-hide
          flex
          items-center
          space-x-8
          py-5
          px-6
          whitespace-nowrap
          '
          >
            {nba_scores.slice(21, 40).map(result => (
              <HeaderScorecard key={result.GameID} result={result} />
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color='red'
            buttonType='link'
            onClick={e => setShowMore(false)}
            ripple='dark'
          >
            Close
          </Button>

          <Button
            color='green'
            onClick={e => setShowMore(false)}
            ripple='light'
          >
            All scores
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default NBAHeaderScores
