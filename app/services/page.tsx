
import { Metadata } from 'next';
import {ServicesPage} from '@/app/components/services-page';
import { NavMenu } from '@/app/components/Navigation';

export const metadata: Metadata = {
      title: "JP Gardening - Services"
}

 function service() {
 
 
  return (
  <>
  
       <header>
             <NavMenu />
      </header>
      <div className='bg-green-900'>
      
            <ServicesPage />
      </div>
</>
        )
      }

export default service

