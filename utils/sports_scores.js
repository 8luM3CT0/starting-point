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
    },

    fetchSecondNHL: {
        title: 'Second Scores (NHL)',
        url: `/f4b120a2-649c-4854-b519-b84414eb5e43/summary.json?api_key=${process.env.second_nhl_key}`
    }
}