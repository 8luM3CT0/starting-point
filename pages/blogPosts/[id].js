//front-end
//back-end
import { auth, store, provider } from '../../firebaseFile'
import { useAutState } from 'react-firebase-hooks/auth'

function Post () {
  return (
    <div
      className='
        overflow-hidden 
        h-screen 
        bg-gray-900 
        pb-10'
    >
      {/**PostHeader */}
      <main
        className='
            max-w-[1590px] 
            overflow-y-scroll
            scrollbar-hide 
            bg-gray-600'
      >
        {/**ImagePosting */}
        {/**Editor */}
        <div
          className='
                flex-grow

                '
        ></div>
      </main>
    </div>
  )
}

export default Post
