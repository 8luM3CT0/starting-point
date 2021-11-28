//front-end
import TeamStandings from './TeamStandings'
//back-end

function StandingsFeed ({ nba_team_standings }) {
  return (
    <div className='flex-grow max-h-[800px] space-y-10 grid justify-evenly items-center'>
      <h1
        className='
        text-gray-800 
        top-0 
        rounded-3xl 
        text-2xl 
        font-medium 
        underline 
        font-google-sans
        '
      >
        Team Standings
      </h1>
      <div
        className='
      newsStanding
      '
      >
        {nba_team_standings.map(result => (
          <TeamStandings key={result.TeamID} result={result} />
        ))}
      </div>
    </div>
  )
}

export default StandingsFeed
