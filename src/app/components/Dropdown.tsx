'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
type DropdownProps = {
  title: string
  children?: React.ReactNode
}
export default function Dropdown({ title, children }: DropdownProps) {
  
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <div className="dropdown-title"
      onClick={() => router.push('/' + title.toLowerCase()) }
      onMouseEnter={() => setShow(true)} 
      onMouseLeave={() => setShow(false)} 
     
    >
      <div>{title}</div>
      {children && (
      <div className="=dropdown-content"
      
      style={{
        top:80 ,
        minWidth: '10%',
        position: 'absolute',
        display: show ? 'flex' : 'none',
        flexDirection: 'column',
        whiteSpace: 'nowrap',
        backgroundColor: "grey",
        colorRendering: 'auto',
        borderRadius: 10, // Add rounded corners
        marginBottom: 30,
        padding: 10,
        transition: "background-color ease-in .3s", // Fix the transition property
        textAlign: 'left',
      }}
      >
        { children }
      </div>
    
    )}
    </div>
  )
}