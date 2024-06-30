
import { NaviGrass } from '@/components/component/NaviGrass';
import { Metadata } from 'next';
import {ServicesPage} from '@/components/services-page';

export const metadata: Metadata = {
      title: "JP Gardening - Services"
}

 function services() {
 
 
  return (
  <>
  
       <header>
             <NaviGrass />
      </header>
      <div className='bg-green-900'>
      
            <ServicesPage />
      </div>
</>
        )
      }

export default services

