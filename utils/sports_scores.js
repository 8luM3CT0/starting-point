export default {
    fetchNBAScores: {
        title: 'Scores (NBA)',
        url: `/nba/scores/json/Games/%7B2021%7D?key=${process.env.nba_key}`
    },
    fetchNFLScores: {
        title: 'Scores (NFL)',
        url: `/nfl/scores/json/Scores/%7B2021%7D?key=${process.env.nfl_key}`
    },
    fetchCBBScores: {
        title: 'Scores (CBB)',
        url: `/cbb/scores/json/Games/%7B2021%7D?key=${process.env.cbb_key}`
    },
    fetchMLBScores: {
        title: 'Scores (MLB)',
        url: `/mlb/scores/json/Games/%7B2021%7D?key=${process.env.mlb_key}`
    },
    fetchNHLScores: {
        title: 'Scores (NHL)',
        url: `/nhl/scores/json/Games/%7B2021%7D?key=${process.env.nhl_key}`
    }
}