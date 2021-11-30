export default {
    fetchNBAScores: {
        title: 'Scores (NBA)',
        url: `/nba/scores/json/Games/%7B2021%7D?key=${process.env.nba_key}`
    },
    fetchNFLScores: {
        title: 'Scores (NFL)',
        url: `/nfl/scores/json/Scores/%7B2021%7D?key=${process.env.nfl_key}`
    },
    fetchMLBScores: {
        title: 'Scores (MLB)',
        url: `/mlb/scores/json/Games/%7B2021%7D?key=${process.env.mlb_key}`
    }
}