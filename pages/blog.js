//front-end
import Head from 'next/head'
import Header from '../components/header/Header'
//back-end

function Blog () {
  return (
    <div className='scrollbar-hide overflow-hidden bg-[#2d3642] pb-8'>
      <Head>
        <title>Here's our blog, take your time.</title>
      </Head>
      <Header />
      <div
        className='
      max-w-[1700px]
      h-screen
      overflow-y-scroll
      scrollbar-hide
      bg-gray-200
      mx-auto
      '
      ></div>
    </div>
  )
}

export default Blog
