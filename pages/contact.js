//front-end
import Head from 'next/head'
import Header from '../components/header/Header'
//back-end

function Contact () {
  return (
    <div className='scrollbar-hide overflow-hidden bg-[#2d3642] pb-8'>
      <Head>
        <title>Our contact details</title>
      </Head>
      <Header />
      <div
        className='
      max-w-[1700px]
      h-screen
      overflow-y-scroll
      scrollbar-hide
      bg-[#45a29e]
      mx-auto
      '
      ></div>
    </div>
  )
}

export default Contact
