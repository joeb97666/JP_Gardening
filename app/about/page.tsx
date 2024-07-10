import { AboutUs } from '@/app/components/about-us';
import { Metadata } from 'next';
import { NavMenu } from '@/app/components/Navigation';

export const metadata: Metadata = {
      title: "JP Gardening - About"
}

function about() {
 
 
  return (
  <>
  
       <header>
            <NavMenu/>
      </header>

      <div className='bg-green-900'>
      
       <meta property="og:image" content="/istock/opengraph-image.png" />
            <AboutUs/>
      
      </div>
              
</>
        )
      }

export default about