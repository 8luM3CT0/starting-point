//front-end
import { forwardRef } from 'react'
//back-end

const NewsArticle = forwardRef(({ result }, ref) => {
  return (
    <div
      className='
        text-blue-400 
        font-semibold 
        font-hind-font
        text-lg 
        my-4
        flex
        items-center
        '
    >
      <h3
        className='
         hover:underline 
         hover:animate-pulse'
      >
        {result.Title}
      </h3>
      <h5 className='
      text-gray-500 
      text-sm 
      font-medium 
      ml-5'>
        by {result.OriginalSource}
      </h5>
    </div>
  )
})
export default NewsArticle
