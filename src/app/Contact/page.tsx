
import { NaviGrass } from '@/components/component/NaviGrass';
import { ContactPage } from '@/components/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
      title: "JP Gardening - Contact"
}

 function contactUs() {
 
 
  return (
  <>
  
       <header>
             <NaviGrass />
      </header>
      <div className='bg-green-900'>
      <meta property="og:image" content="/istock/opengraph-image.png" />
            <ContactPage />
      </div>
              
</>
        )
      }

export default contactUs