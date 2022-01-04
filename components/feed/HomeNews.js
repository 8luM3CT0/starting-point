//front-end
import NewsArticle from './NewsArticle'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
//back-end

function HomeNews ({ nba_results }) {
  return (
    <div
      className='
        flex-grow
        flex
        items-center
      rounded-xl
      space-y-8
      space-x-4
      p-10 
      h-[190px]
      bg-gray-800 
      overflow-x-scroll 
      scrollbar-hide'
    >
      {/**NewsArticle.js */}
      {nba_results.map(result => (
        <NewsArticle key={result.NewsID} result={result} />
      ))}
    </div>
  )
}

export default HomeNews
