import type { NextPage } from 'next'
import IndexLeft from '../components/Index/IndexLeft'
import IndexRight from '../components/Index/IndexRight'


const Home: NextPage = () => {
  return (
    <div className='h-[90vh] w-[100%] flex flex-row'>
        <IndexLeft/>
        <IndexRight/>
    </div>
  )
}

export default Home
