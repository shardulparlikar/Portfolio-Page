import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../styles/buttons.module.css'

const Home: NextPage = () => {
  const router = useRouter()

  function routeToAbout () {
    console.log('hi')
    router.push('/about')
    console.log(router)
    console.log('hi')
  }









  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <button onClick={routeToAbout} className={styles.button}>
        hi 
      </button>
      <h5 className='border rounded-4xl border-shardul'>
        shardul
      </h5>

      <h2 className='text-shardul'>
        shar
      </h2>
    </div>
  )
}

export default Home
