//front-end
import Head from 'next/head'
import Header from '../components/header/Header'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Button from '@material-tailwind/react/Button'
import AboutHeader from '../components/header/AboutHeader'
import Tab from '@material-tailwind/react/Tab'
import TabList from '@material-tailwind/react/TabList'
import TabItem from '@material-tailwind/react/TabItem'
import TabContent from '@material-tailwind/react/TabContent'
import TabPane from '@material-tailwind/react/TabPane'
import Icon from '@material-tailwind/react/Icon'
//back-end
import { useState } from 'react'

function About () {
  const [openTab, setOpenTab] = useState(1)

  return (
    <div className='scrollbar-hide h-screen overflow-hidden bg-[#2d3642] pb-8'>
      <Head>
        <title>About us</title>
      </Head>
      <AboutHeader />
      <div
        className='
      max-w-7xl
      h-screen
      overflow-y-scroll
      scrollbar-hide
      border-x
      border-teal-200
      bg-gray-600
      mx-auto
      '
      >
        <Tab>
          <TabList color='teal'>
            <TabItem
              onClick={e => {
                e.preventDefault()
                setOpenTab(1)
              }}
              ripple='light'
              active={openTab === 1 ? true : false}
              href='tabItem'
            >
              <Icon name='source' size='lg' />
              ReactJS
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
              <Icon name='code_off' size='lg' />
              NextJS
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
              <Icon name='qr_code' size='lg' />
              TailwindCSS
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
              <Icon name='code' size='lg' />
              styled-components
            </TabItem>
            <TabItem
              onClick={e => {
                e.preventDefault()
                setOpenTab(5)
              }}
              ripple='light'
              active={openTab === 5 ? true : false}
              href='tabItem'
            >
              <Icon name='developer_mode' size='lg' />
              Why the hell ?
            </TabItem>
          </TabList>

          <TabContent>
            <TabPane color='darkBlue' active={openTab === 1 ? true : false}>
              <div className='grid space-y-8'>
                <h1
                  className='
                text-teal-400 
                text-[32px] 
                font-hind-font 
                font-normal'
                >
                  I. ReactJS
                </h1>
                <h3>
                  "React is a library for building composable user interfaces.
                  It encourages the creation of reusable UI components, which
                  present data that changes over time. Lots of people use React
                  as the V in MVC. React abstracts away the DOM from you,
                  offering a simpler programming model and better performance.
                  React can also render on the server using Node, and it can
                  power native apps using React Native. React implements one-way
                  reactive data flow, which reduces the boilerplate and is
                  easier to reason about than traditional data binding."
                  <br />
                  ---
                  {'  '}
                  <br />
                  <p className='font-semibold text-gray-800 text-xl'>
                    To sum it up, it's a library that is used for creating
                    front-end components.
                  </p>
                  {'  '}
                  <br />
                  ---
                  <br />
                  {'  '}
                </h3>
              </div>
            </TabPane>
            <TabPane active={openTab === 2 ? true : false}>
              <div className='grid space-y-8'>
                <h1
                  className='
                text-teal-400 
                text-[32px] 
                font-hind-font 
                font-normal'
                >
                  II. NextJS
                </h1>
                <h3>
                  "Next.js is an open-source development framework built on top
                  of Node.js enabling React based web applications
                  functionalities such as server-side rendering and generating
                  static websites. React documentation mentions Next.js among
                  "Recommended Toolchains" advising it to developers as a
                  solution when "building a server-rendered website with
                  Node.js".[4] Traditional React apps render all their content
                  in the client-side browser, Next.js is used to extend this
                  functionality to include applications rendered on the server
                  side."
                  <br />
                  ---
                  {'  '}
                  <br />
                  <p className='font-semibold text-gray-800 text-xl'>
                    Fast, SEO-friendly and basically ReactJS on steroids, with
                    some back-end functionalities. It allows hybridization of
                    static and server rendering.
                  </p>
                  {'  '}
                  <br />
                  ---
                  <br />
                  {'  '}
                </h3>
              </div>
            </TabPane>
            <TabPane active={openTab === 3 ? true : false}>
              <div className='grid space-y-8'>
                <h1
                  className='
                text-teal-400 
                text-[32px] 
                font-hind-font 
                font-normal'
                >
                  III. TailwindCSS
                </h1>
                <h3>
                  "In short, Tailwind is a CSS framework, but it’s different
                  from the likes of Bootstrap and Foundation. It provides only
                  the raw basics of what you need to style your own web pages,
                  such as margins, sizes, positioning, colors, that sort of
                  thing. You won’t find off-the-shelf components such as buttons
                  and navbars–it’s up to you to use Tailwind to build your own
                  components. This gives immense freedom where many modern
                  frameworks only restrict what you build; there’s no need to
                  override anything!"
                  <br />
                  ---
                  {'  '}
                  <br />
                  <p className='font-semibold text-gray-800 text-xl'>
                    CSS within your component, helps out a lot.
                  </p>
                  {'  '}
                  <br />
                  ---
                  <br />
                  {'  '}
                </h3>
              </div>
            </TabPane>
            <TabPane active={openTab === 4 ? true : false}>
              <div className='grid space-y-8'>
                <h1
                  className='
                text-teal-400 
                text-[32px] 
                font-hind-font 
                font-normal'
                >
                  IV. styled-components
                </h1>
                <h3>
                  "styled-components utilises tagged template literals to style
                  your components. It removes the mapping between components and
                  styles. This means that when you're defining your styles,
                  you're actually creating a normal React component, that has
                  your styles attached to it."
                  <br />
                  ---
                  {'  '}
                  <br />
                  <p className='font-semibold text-gray-800 text-xl'>
                    Like TailwindCSS, but different syntax.
                  </p>
                  {'  '}
                  <br />
                  ---
                  <br />
                  {'  '}
                </h3>
              </div>
            </TabPane>
            <TabPane active={openTab === 5 ? true : false}>
              <div className='grid space-y-8'>
                <h1
                  className='
                text-teal-400 
                text-[32px] 
                font-hind-font 
                font-normal'
                >
                  V. Why the hell am I making these ?
                </h1>
                <h3>
                  "Because all of these, I will be using for a lot of my future
                  builds. And I want to spread awareness over these libraries
                  and frameworks. And also cause why not? It's fun posting
                  things that give info. It's incredible and should never be
                  ridiculed. "
                  <br />
                  ---
                  {'  '}
                  <br />
                  <p className='font-semibold text-gray-800 text-xl'>
                    Also helps with content drought.
                  </p>
                  {'  '}
                  <br />
                  ---
                  <br />
                  {'  '}
                </h3>
              </div>
            </TabPane>
          </TabContent>
        </Tab>
      </div>
    </div>
  )
}

export default About
