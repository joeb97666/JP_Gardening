
import { ContactPage } from '@/app/components/ContactPage';
import { NavMenu } from '@/app/components/Navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
      title: "JP Gardening - Contact"
}

 function contactUs() {
 
 
  return (
  <>
  
       <header>
             <NavMenu />
      </header>
      <div className='bg-green-900'>
      <meta property="og:image" content="/istock/opengraph-image.png" />
            <ContactPage />
      </div>
              
</>
        )
      }

export default contactUs