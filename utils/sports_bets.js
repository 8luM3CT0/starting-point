export default {
    fetchNBABets: {
        title: 'Betting Events',
        url: `nba/odds/json/BettingEvents/%7B2021%7D?key=${process.env.nba_key}`
    },

    fetchNBABetMetadata: {
        title: 'Betting Metadata',
        url: `nba/odds/json/BettingMetadata?key=${process.env.nba_key}`
    }
}