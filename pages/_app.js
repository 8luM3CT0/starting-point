import '../styles/globals.css'
import '@material-tailwind/react/tailwind.css'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
