export default {
    fetchNBAStandings: {
        title: 'Team Standings (NBA)',
        url: `/nba/scores/json/Standings/%7B2021%7D?key=${process.env.nba_key}`
    },
    fetchNFLStandings: {
        title: 'Team Standings (NFL)',
        url: `/nfl/scores/json/Standings/%7B2021%7D?key=${process.env.nfl_key}`
    }
}