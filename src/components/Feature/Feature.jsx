
import './Feature.css'
import { Outlet} from "react-router-dom"
import img1 from '../../assets/images/sub5.jpg'
import SubTitle from '../SubTitle';

function Feature() {
   
  return (
    <div>

        <SubTitle name = 'Featured Products' showLinks = {true}/>

        <Outlet/>
        <div>
          <div className='mt-5  w-100 sub-banner '>
            <img src={img1} className='w-100 ' alt="" />
          </div>
        </div>
    </div>
    
    

  )
}

export default Feature
