//front-end
import NewsArticle from './NewsArticle'
//back-end

function NewsFeed ({ nba_results }) {
  return (
    <div
      className='
      bg-gray-100
        mt-8
        px-6
        w-full
        grid
        md:flex
        h-[290px]
        '
    >
      <div className='grid flex-[0.3] rounded-xl px-4 bg-blue-50 overflow-y-scroll scrollbar-hide'>
        <h3
          className='
      text-blue-400 
      top-0 
      bg-blue-50
      rounded-3xl 
      z-50 
      sticky 
      text-xl 
      font-bold 
      underline 
      font-google-sans'
        >
          News
        </h3>
        {/**NewsArticle.js */}
        {nba_results.map(result => (
          <NewsArticle key={result.NewsID} result={result} />
        ))}
      </div>
    </div>
  )
}

export default NewsFeed
