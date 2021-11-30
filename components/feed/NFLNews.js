//front-end
import NewsArticle from './NewsArticle'
//back-end

function NFLNews ({ nfl_results }) {
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
      px-4 
      h-[190px]
      bg-gray-800 
      overflow-y-scroll 
      scrollbar-hide'
      >
        {/**NewsArticle.js */}
        {nfl_results.map(result => (
          <NewsArticle key={result.NewsID} result={result} />
        ))}
      </div>
    </div>
  )
}

export default NFLNews
