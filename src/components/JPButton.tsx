"use client"
import React from 'react'

type Props = {
    type?: "submit" | "reset" | "button"
    classes?:string
    children:React.ReactNode
    onClick?: ()=>void
}


const JPButton = (props: Props) => {
    const { children, classes,onClick, type="button" } = props
  return (
    <button onClick={onClick} type={type} className={`py-2 px-3 rounded-md text-white text-base bg-[#131340] ${classes}`}>{children || "button"}</button>
  )
}

export default JPButton