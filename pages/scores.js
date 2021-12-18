//front-end
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/Header'
import NewsFeed from '../components/feed/NewsFeed'
import Tab from '@material-tailwind/react/Tab'
import TabList from '@material-tailwind/react/TabList'
import TabItem from '@material-tailwind/react/TabItem'
import TabContent from '@material-tailwind/react/TabContent'
import TabPane from '@material-tailwind/react/TabPane'
import StandingsFeed from '../components/feed/StandingsFeed'
import NBAHeaderScores from '../components/header/NBAHeaderScores'
import NFLHeaderScores from '../components/header/NFLHeaderScores'
import BettingDetails from '../components/feed/BettingDetails'
//back-end
//back-end-api
import sports_news from '../utils/sports_news'
import sports_scores from '../utils/sports_scores'
import sports_standings from '../utils/sports_standings'
import sports_bets from '../utils/sports_bets'
//auth-backend
import { auth, store, provider } from '../firebaseFile'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

function scores ({
  nba_scores,
  nfl_scores,
  nhl_scores,
  nfl_results,
  nba_results,
  mlb_results,
  nhl_results,
  nba_team_standings,
  nfl_team_standings,
  nhl_team_standings,
  mlb_team_standings,
  nba_betting_data,
  nfl_betting_data,
  nhl_betting_data
}) {
  const [user] = useAuthState(auth)

  const [openTab, setOpenTab] = useState(1)

  return (
    <div className='scrollbar-hide h-screen overflow-hidden bg-[#2d3642] pb-8'>
      <Head>
        <title>StartUp - Blog</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <div className='max-w-[1700px] h-screen overflow-y-scroll scrollbar-hide bg-[#2d3642] mx-auto'>
        <Tab>
          <TabList color='teal'>
            <div className='mx-auto  flex items-center'>
              <TabItem
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                ripple='light'
                active={openTab === 1 ? true : false}
                href='tabItem'
              >
                NFL
              </TabItem>
              <TabItem
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                ripple='light'
                active={openTab === 2 ? true : false}
                href='tabItem'
              >
                NBA
              </TabItem>
              <TabItem
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(3)
                }}
                ripple='light'
                active={openTab === 3 ? true : false}
                href='tabItem'
              >
                MLB
              </TabItem>
              <TabItem
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(4)
                }}
                ripple='light'
                active={openTab === 4 ? true : false}
                href='tabItem'
              >
                NHL
              </TabItem>
            </div>
          </TabList>

          <TabContent>
            <TabPane active={openTab === 1 ? true : false}>
              <NBAHeaderScores nba_scores={nfl_scores} />
              <main
                className='
              justify-center
              mx-auto
              max-w-[1680px]
              mb-8
              rounded-xl
              '
              >
                <img
                  loading='lazy'
                  src='https://static01.nyt.com/images/2021/11/14/multimedia/14nfl-wwl-jones/14nfl-wwl-jones-superJumbo.jpg'
                  alt=''
                  className='              
                  w-[720px] 
                  md:w-full 
                  h-[200px]
                  sm:h-[400px] 
                  lg:h-[620px] 
                  xl:h-[800px]
                  opacity-75'
                />
                <div className='topFeedDiv'>
                  <NewsFeed nba_results={nfl_results} />
                  <StandingsFeed nba_team_standings={nfl_team_standings} />
                </div>
                <h3
                  className='
                text-gray-800
                top-0
                rounded-3xl
                text-2xl
                font-bold
                underline
                mt-3
                font-google-sans
                '
                >
                  Betting details
                </h3>
                <div className='p-8 h-[720px] overflow-y-scroll scrollbar-hide max-w-[1480px] mx-auto  rounded-lg'>
                  <BettingDetails betting_results={nfl_betting_data} />
                </div>
              </main>
            </TabPane>
            <TabPane active={openTab === 2 ? true : false}>
              <NBAHeaderScores nba_scores={nba_scores} />
              <main
                className='
          justify-center
          mx-auto
          max-w-[1680px]
          mb-8
          rounded-xl
      '
              >
                <img
                  loading='lazy'
                  src='https://sportshub.cbsistatic.com/i/r/2021/11/22/48b18d6f-e29e-47b5-8413-7f9c8e5b3b87/thumbnail/770x433/a44d48afc6d8927d12cb56d13ba622ad/curry-mvp.jpg'
                  alt=''
                  className='
              w-[720px] 
              md:w-full 
              h-[200px]
              sm:h-[400px] 
              lg:h-[620px] 
              xl:h-[720px]
              opacity-75'
                />
                <div className='topFeedDiv'>
                  <NewsFeed nba_results={nba_results} />
                  <StandingsFeed nba_team_standings={nba_team_standings} />
                </div>
                <h3
                  className='
                text-gray-800
                top-0
                mt-3
                rounded-3xl
                text-2xl
                font-bold
                underline
                font-google-sans
                '
                >
                  Betting details
                </h3>
                <div className='p-8 h-[720px] overflow-y-scroll scrollbar-hide max-w-[1480px] mx-auto  rounded-lg'>
                  <BettingDetails betting_results={nba_betting_data} />
                </div>
              </main>
            </TabPane>
            <TabPane active={openTab === 3 ? true : false}>
              <main
                className='          
          justify-center
          mx-auto
          max-w-[1680px]
          mb-8
          rounded-xl'
              >
                <img
                  loading='lazy'
                  src='https://static01.nyt.com/images/2020/08/24/sports/24mlb-kepner-1/merlin_176084667_69b1099b-0b7e-41ce-bfdf-e407899f10dc-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
                  alt=''
                  className='              
                w-[720px] 
                md:w-full 
                h-[200px]
                sm:h-[400px] 
                lg:h-[620px] 
                xl:h-[720px]
                opacity-75'
                />
                <div className='topFeedDiv'>
                  <NewsFeed nba_results={mlb_results} />
                  <StandingsFeed nba_team_standings={mlb_team_standings} />
                </div>
                <h3
                  className='
                text-gray-800
                top-0
                rounded-3xl
                text-2xl
                mt-3
                font-bold
                underline
                font-google-sans
                '
                >
                  Betting details
                </h3>
                <div className='p-8 h-[720px] overflow-y-scroll scrollbar-hide max-w-[1480px] mx-auto  rounded-lg'></div>
              </main>
            </TabPane>
            <TabPane active={openTab === 4 ? true : false}>
              {/*  <NBAHeaderScores nba_scores={nhl_scores} />*/}
              <main
                className='
              justify-center
              mx-auto
              max-w-[1680px]
              mb-8
              rounded-xl
              '
              >
                <img
                  loading='lazy'
                  src='   https://thumbor.forbes.com/thumbor/0x0/smart/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c06c7194bbe6f0f2aa13c1b%2F960x0.jpg%3FcropX1%3D250%26cropX2%3D2250%26cropY1%3D0%26cropY2%3D2000'
                  alt=''
                  className='
                w-[720px] 
                md:w-full 
                h-[200px]
                sm:h-[400px] 
                lg:h-[620px] 
                xl:h-[720px]
                opacity-75
               '
                />
                <div className='topFeedDiv'>
                  <NewsFeed nba_results={nhl_results} />
                  <StandingsFeed nba_team_standings={nhl_team_standings} />
                </div>
                <h3
                  className='
                text-gray-800
                top-0
                rounded-3xl
                text-2xl
                font-bold
                mt-3
                underline
                font-google-sans
                '
                >
                  Betting details
                </h3>
                <div className='p-8 h-[720px] overflow-y-scroll scrollbar-hide max-w-[1480px] mx-auto  rounded-lg'>
                  <BettingDetails betting_results={nhl_scores} />
                </div>
              </main>
            </TabPane>
          </TabContent>
        </Tab>
      </div>
    </div>
  )
}

export default scores

export async function getServerSideProps (context) {
  const genre = context.query.title

  const nba_scores = await fetch(
    `https://api.sportsdata.io/v3/${sports_scores.fetchNBAScores.url}`
  ).then(res => res.json())

  const nfl_scores = await fetch(
    `https://api.sportsdata.io/v3/${sports_scores.fetchNFLScores.url}`
  ).then(res => res.json())

  const nhl_scores = await fetch(
    `https://api.sportsdata.io/v3/${sports_scores.fetchNHLScores.url}`
  ).then(res => res.json())

  /* const nhl_second = await fetch(
    `https://api.sportradar.us/nhl/trial/v7/en/games${sports_scores.fetchSecondNHL.url}`
  ).then(res => res.json())
*/
  const nba_news = await fetch(
    `https://api.sportsdata.io/v3/${sports_news.fetchNBANews.url}`
  ).then(res => res.json())

  const nfl_news = await fetch(
    `https://api.sportsdata.io/v3/${sports_news.fetchNFLNews.url}`
  ).then(res => res.json())

  const mlb_news = await fetch(
    `https://api.sportsdata.io/v3/${sports_news.fetchMLBNews.url}`
  ).then(res => res.json())

  const nhl_news = await fetch(
    `https://api.sportsdata.io/v3/${sports_news.fetchNHLNews.url}`
  ).then(res => res.json())

  const nba_standing_req = await fetch(
    `https://api.sportsdata.io/v3/${sports_standings.fetchNBAStandings.url}`
  ).then(res => res.json())

  const nfl_standing_req = await fetch(
    `https://api.sportsdata.io/v3/${sports_standings.fetchNFLStandings.url}`
  ).then(res => res.json())

  const nhl_standing_req = await fetch(
    `https://api.sportsdata.io/v3/${sports_standings.fetchNHLStandings.url}`
  ).then(res => res.json())

  const mlb_standing_req = await fetch(
    `https://api.sportsdata.io/v3/${sports_standings.fetchMLBStandings.url}`
  ).then(res => res.json())

  const nba_bets = await fetch(
    `https://api.sportsdata.io/v3/${sports_bets.fetchNBABets.url}`
  ).then(res => res.json())

  const nfl_bets = await fetch(
    `https://api.sportsdata.io/v3/${sports_bets.fetchNFLBets.url}`
  ).then(res => res.json())

  return {
    props: {
      nba_scores: nba_scores,
      nfl_scores: nfl_scores,
      nhl_scores: nhl_scores,
      nba_results: nba_news,
      nfl_results: nfl_news,
      mlb_results: mlb_news,
      nhl_results: nhl_news,
      nba_team_standings: nba_standing_req,
      nfl_team_standings: nfl_standing_req,
      nhl_team_standings: nhl_standing_req,
      mlb_team_standings: mlb_standing_req,
      nba_betting_data: nba_bets,
      nfl_betting_data: nfl_bets
    }
  }
}