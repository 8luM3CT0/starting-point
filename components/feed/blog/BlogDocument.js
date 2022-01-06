//front-end
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
//back-end
import { useRouter } from 'next/router'

function BlogDocument ({
  id,
  fileName,
  timestamp,
  headPhoto,
  author,
  blogText,
  blogSubject
}) {
  const router = useRouter()

  return (
    <div
      className='blogPostDiv'
      onClick={() => router.push(`/blogPosts/${id}`)}
    >
      {/*<img
        src='https://wallpaperaccess.com/full/921223.jpg'
        alt=''
        className='
     rounded-xl 
     h-[190px] 
     w-[290px] 
     lg:h-[210px] 
     lg:w-[330px] 
     xl:h-[240px]
     xl:w-[410px] 
     opacity-90'
      /> */}
      <img
        src={blogSubject}
        alt=''
        className='
     rounded-xl 
     h-[190px] 
     w-[290px] 
     lg:h-[210px] 
     lg:w-[330px] 
     xl:h-[240px]
     xl:w-[410px] 
     opacity-90'
      />
      <div
        className='
     flex 
     flex-col 
     text-center 
     items-center 
     text-teal-200'
      >
        <h1
          className='
       text-lg 
       lg:text-[32px] 
       font-robot-slab 
       font-semibold'
        >
          {fileName}
        </h1>
        <p className='blogContent'>{blogText}</p>
      </div>
    </div>
  )
}

export default BlogDocument
