import type { NextPage } from 'next'
import IndexLeft from '../components/Index/IndexLeft'
import IndexRight from '../components/Index/IndexRight'


const Home: NextPage = () => {
  return (
    <div className='sm:h-[90vh] h-[100vh] w-[100%] flex sm:flex-row  flex-col-reverse'>
        <IndexLeft/>
        <IndexRight/>
    </div>
  )
}

export default Home
