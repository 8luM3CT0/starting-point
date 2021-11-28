export default {
    fetchNBAScores: {
        title: 'Scores (NBA)',
        url: `/nba/scores/json/Games/%7B2021%7D?key=${process.env.nba_key}`
    },
    fetchNFLScores: {
        title: 'Scores (NFL)',
        url: '/nfl/scores/json/Scores/%7B2021%7D?key=3c444c4c4ad8477b86e111fa4ecdc5c2'
    }
}