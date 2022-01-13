export default {
    fetchNBABets: {
        title: 'Betting Details (NBA)',
        url: `nba/odds/json/BettingEvents/%7B2021%7D?key=${process.env.nba_key}`
    },

    fetchNFLBets: {
        title: 'Betting Details (NFL)',
        url: `nfl/odds/json/BettingEvents/%7B2021%7D?key=${process.env.nfl_key}`
    },

    fetchMLBBets: {
        title: 'Betting Details (MLB)',
        url: `mlb/odds/json/BettingEvents/2021?key=${process.env.mlb_key}`
    },

    fetchNHLBets: {
        title: 'Betting Details (NHL)',
        url: `nhl/odds/json/BettingEvents/2021?key=${process.env.nhl_key}`
    },

    fetchNBABetMetadata: {
        title: 'Betting Metadata',
        url: `nba/odds/json/BettingMetadata?key=${process.env.nba_key}`
    },

    fetchNFLBetMetadata: {
        title: 'Betting Metadata (NFL)',
        url: 'nfl/odds/json/BettingMetadata?key=3c444c4c4ad8477b86e111fa4ecdc5c2'
    },

    fetchMLBBetMetadata: {
        title: 'Betting Metadata (MLB)',
        url: `mlb/odds/json/BettingMetadata?key=${process.env.mlb_key}`
    },

    fetchNHLBetMetadata: {
        title: 'Betting Metadata (NHL)',
        url: `nhl/odds/json/BettingMetadata?key=${process.env.nhl_key}`
    }
}