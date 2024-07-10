import { Metadata } from 'next';
import { HomePage } from '@/app/components/HomePage';
import { NavMenu } from '@/app/components/Navigation';
export const metadata: Metadata = {
      title: "JP Gardening - Home"
      }

export default function Home() {
 
 
  return (
      
  <div className="bg-green-900">
      <meta property="og:image" content="/istock/opengraph-image.png" />
        <NavMenu/>
        <HomePage/> 
  </div>
        )
      }
