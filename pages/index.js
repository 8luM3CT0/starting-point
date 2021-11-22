//front-end
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/Header'
//back-end
import sports_news from '../utils/sports_news'
import sports_scores from '../utils/sports_scores'
import { auth, firestore, provider } from '../firebase'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Home ({ results, second_results, third_results }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log(results, second_results, third_results)

  return (
    <div className='scrollbar-hide'>
      <Head>
        <title>StartUp - Blog</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main
        className='
          mx-auto
          max-w-[1680px]
          bg-gray-100
          h-screen
      '
      ></main>
    </div>
  )
}

export async function getServerSideProps (context) {
  const genre = context.query.title

  const request = await fetch(
    `https://api.sportsdata.io/v3/${sports_scores.fetchNBAScores.url}`
  ).then(res => res.json())

  const second_request = await fetch(
    `https://api.sportsdata.io/v3/${sports_news[genre]?.url ||
      sports_news.fetchNFLNews.url}`
  ).then(res => res.json())

  const third_request = await fetch(
    `https://api.sportsdata.io/v3/${sports_news[genre]?.url ||
      sports_news.fetchNHLNews.url}`
  ).then(res => res.json())

  return {
    props: {
      results: request
      /*     second_results: second_request,
      third_results: third_request */
    }
  }
}
