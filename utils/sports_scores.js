export default {
    fetchNBAScores: {
        title: 'Scores (NBA)',
        url: `/nba/scores/json/Games/%7B2021%7D?key=${process.env.nba_key}`
    }
}