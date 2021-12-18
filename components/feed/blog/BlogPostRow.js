//front-end
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
//back-end
import { useRouter } from 'next/router'

function BlogPostRow ({ id, blogName, timestamp, headPhoto, author }) {
  const router = useRouter()

  return (
    <div
      className='
        flex
        items-center
        p-4
        rounded-lg
        text-gray-100
        cursor-pointer
        text-sm
        bg-gray-600
        hover:bg-teal-700
        '
    >
      <Icon name='article' size='3xl' color='teal' />
      <p
        className='
      flex-grow 
      pl-5 
      w-10 
      pr-10 
      truncate'
      >
        {blogName}
      </p>{' '}
      <h3
        className='
        flex
        text-center
        items-center
      pr-5 
      text-sm 
      text-blue-200'
      >
        <p
          className='
        mr-3
        font-semibold
        '
        >
          by
        </p>{' '}
        {author}
      </h3>{' '}
      <p
        className='
      pr-5 
      text-sm'
      >
        {timestamp?.toDate().toLocaleDateString()}
      </p>
      <Button
        color='teal'
        buttonType='outline'
        rounded={true}
        iconOnly={true}
        ripple='dark'
        className='border-0'
      >
        <Icon name='more_vert' size='3xl' />
      </Button>
    </div>
  )
}

export default BlogPostRow
