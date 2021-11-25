//front-end
import NewsArticle from './NewsArticle'
import TeamStandings from './TeamStandings'
//back-end

function NewsFeed ({ nba_results, nba_team_standings }) {
  return (
    <div
      className='
newsFeedDiv
        '
    >
      <div
        className='
      grid
      max-w-[720px]
      rounded-xl 
      px-4 
      bg-gray-800 
      overflow-y-scroll 
      scrollbar-hide'
      >
        <h3
          className='
      text-blue-200 
      top-0 
      bg-gray-800
      rounded-3xl 
      text-2xl 
      font-semibold 
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
      <div
        className='
      newsStanding
      '
      >
        <h1
          className='
        text-blue-200
        top-0
        bg-gray-800
        rounded-3xl
        text-2xl
        font-semibold
        mb-4
        underline
        font-google-sans
        '
        >
          Team Standings
        </h1>
        {nba_team_standings.map(result => (
          <TeamStandings key={result.TeamID} result={result} />
        ))}
      </div>
    </div>
  )
}

export default NewsFeed
