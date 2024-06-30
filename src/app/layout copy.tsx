import { useEffect } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const mdata: Metadata = {
  title: {
    default: 'JP Gardening & Landscaping Long Beach',
    template: "%s - JP Gardening & Landscaping Long Beach",
  },

 twitter:{
  card: "summary",
  creator: "@dabonthuis",
  images: "https://jp-gardening.com/iStock/opengraph-image.png",
  description: 'Landscape Design, Gardening, Designer Landscapes, irrigation system design and installation..',
 
  },
  
  openGraph:{
    type: "website",
    url: "https://jp-gardening.com",
    title: "JP Gardening",
    description: 'Landscape Design, Gardening, Designer Landscapes, irrigation system design and installation..',
    siteName: "JP Gardening",
    images: [{
      url: "https://jp-gardening.com/iStock/opengraph-image.png",
    }],
  }
  
}; 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <>
    <Head>

     <title>{mdata.title as string}</title>
        <meta name="twitter:card" content={mdata.twitter?.title as string} />
        <meta name="twitter:creator" content={mdata.twitter?.creator as string} />  
        <meta name="twitter:description" content={mdata.twitter?.description} />
        <meta name="twitter:image" content={mdata.twitter?.images as string} />
        <meta name='twitter:image' content="https://jp-gardening.com/iStock/opengraph-image.png" />
        <meta name="twitter:image:alt" content="JP GARDENING" />
        
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://jp-gardening.com" />
        <meta name="og:title" content={mdata.openGraph?.title as string} />
        <meta name="og:description" content={mdata.openGraph?.description} />
        <meta name="og:site_name" content={mdata.openGraph?.siteName} />
        <meta name="og:image" content="https://jp-gardening.com/iStock/opengraph-image.png" />
        <meta name="og:image:alt" content="JP GARDENING" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
        <meta name="og:image:type" content="image/png" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:locale:alternate" content="en_US" /> 
       

      </Head>
      {children}
    </>
  );
}
