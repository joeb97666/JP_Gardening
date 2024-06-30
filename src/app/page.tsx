
import { Metadata } from 'next';
import { NaviGrass } from '@/components/component/NaviGrass';
import {HomeGrass} from '@/components/component/HomePageContent';

export const metadata: Metadata = {
      title: "JP Gardening - Home"
      }

export default function Home() {
 
 
  return (
      
  <div className="bg-green-900">
      <meta property="og:image" content="/istock/opengraph-image.png" />
        <NaviGrass/>
        
        <HomeGrass/>    
  </div>
        )
      }
