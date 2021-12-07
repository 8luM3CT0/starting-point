export default {
    fetchNBABets: {
        title: 'Betting Details (NBA)',
        url: `nba/odds/json/BettingEvents/%7B2021%7D?key=${process.env.nba_key}`
    },

    fetchNFLBets: {
        title: 'Betting Details (NFL)',
        url: `nfl/odds/json/BettingEvents/%7B2021%7D?key=${process.env.nfl_key}`
    },

    fetchNBABetMetadata: {
        title: 'Betting Metadata',
        url: `nba/odds/json/BettingMetadata?key=${process.env.nba_key}`
    },

    fetchNFLBetMetadata: {
        title: 'Betting Metadata (NFL)',
        url: `nfl/odds/json/BettingMetadata?key=${process.env.nfl_key}`
    }
}