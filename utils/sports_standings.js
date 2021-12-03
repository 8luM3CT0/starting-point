export default {
    fetchNBAStandings: {
        title: 'Team Standings (NBA)',
        url: `/nba/scores/json/Standings/%7B2021%7D?key=${process.env.nba_key}`
    },
    fetchNFLStandings: {
        title: 'Team Standings (NFL)',
        url: `/nfl/scores/json/Standings/%7B2021%7D?key=${process.env.nfl_key}`
    },
    fetchNHLStandings: {
        title: 'Team Standings (NHL)',
        url: `/nhl/scores/json/Standings/2021?key=${process.env.nhl_key}`
    },
    fetchMLBStandings: {
        title: 'Team Standings (MLB)',
        url: `/mlb/scores/json/Standings/2021?key=${process.env.mlb_key}`
    }
}