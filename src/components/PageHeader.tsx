"use client"
import React from 'react'

type Props = {
    title:string;
    extra:React.ReactNode
}

const PageHeader = (props: Props) => {
    const { title, extra}=props
  return (
    <div className='flex items-center justify-between mt-4 mb-10 w-full'>
        <h1>{title}</h1>
        <div>{extra}</div>
    </div>
  )
}

export default PageHeader