//front-end
import Header from '../../components/header/Header'
//back-end
import { forwardRef } from 'react'

const BetResult = forwardRef(({ result }, ref) => {
  return (
    <div
      ref={result.BettingEventID}
      className='
        overflow-hidden 
        h-screen 
        scrollbar-hide 
        bg-[#2d3642] 
        pb-8'
    >
      <Header />
      <div
        className='
            max-w-[1680px] 
            h-screen 
            overflow-y-scroll 
            scrollbar-hide
            bg-gray-200
            '
      ></div>
    </div>
  )
})
export default BetResult
