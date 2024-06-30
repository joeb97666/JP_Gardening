import { NaviGrass } from '@/components/component/NaviGrass';
import { AboutUs } from '@/components/about-us';
import { Metadata } from 'next';

export const metadata: Metadata = {
      title: "JP Gardening - About"
}

function about() {
 
 
  return (
  <>
  
       <header>
            
             <NaviGrass />
      </header>
      <div className='bg-green-900'>
      <meta property="og:image" content="/istock/opengraph-image.png" />
       <AboutUs/>
      </div>
              
</>
        )
      }

export default about