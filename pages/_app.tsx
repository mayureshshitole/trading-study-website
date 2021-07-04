import '../styles/globals.css'
import CommonLayout from './CommonLayout'

function MyApp({ Component, pageProps }) {
  return (
    <CommonLayout>
      <Component {...pageProps} />
    </CommonLayout>
  )
}

export default MyApp
