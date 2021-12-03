export default {
    fetchNBANews: {
        title: 'NBA News',
        url: `/nba/scores/json/News?key=${process.env.nba_key}`
    },
    fetchNHLNews: {
        title: 'NHL News',
        url: `/nhl/scores/json/News?key=${process.env.nhl_key}`
    },
    fetchNFLNews: {
        title: 'NFL News',
        url: `/nfl/scores/json/News?key=${process.env.nfl_key}`
    },
    fetchMLBNews: {
        title: 'MLB News',
        url: `/mlb/scores/json/News?key=${process.env.mlb_key}`
    }

}