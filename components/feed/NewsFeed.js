//front-end
import NewsArticle from './NewsArticle'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
//back-end

function NewsFeed ({ nba_results }) {
  return (
    <div
      className='
newsFeedDiv
        '
    >
      <h3
        className='
      text-gray-800 
      top-0 
      rounded-3xl 
      text-2xl 
      font-medium 
      underline 
      font-google-sans'
      >
        News
      </h3>
      <div
        className='
      rounded-xl
      space-y-8
      space-x-4
      px-4 
      h-[190px]
      bg-gray-800 
      overflow-y-scroll 
      scrollbar-hide'
      >
        {/**NewsArticle.js */}
        {nba_results.map(result => (
          <NewsArticle key={result.NewsID} result={result} />
        ))}
      </div>
    </div>
  )
}

export default NewsFeed
