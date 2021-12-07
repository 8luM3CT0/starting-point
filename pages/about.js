//front-end
import Head from 'next/head'
import Header from '../components/header/Header'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Button from '@material-tailwind/react/Button'
//back-end

function About () {
  return (
    <div className='scrollbar-hide overflow-hidden bg-[#2d3642] pb-8'>
      <Head>
        <title>About us</title>
      </Head>
      <Header />
      <div
        className='
      max-w-[1700px]
      h-screen
      overflow-y-scroll
      scrollbar-hide
      bg-gray-300
      mx-auto
      '
      ></div>
    </div>
  )
}

export default About
