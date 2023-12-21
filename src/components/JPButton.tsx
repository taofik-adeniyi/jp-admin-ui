"use client"
import React from 'react'

type Props = {
    type?: "submit" | "reset" | "button"
    classes?:string
    children:React.ReactNode
    onClick?: ()=>void
    loading?:boolean
}


const JPButton = (props: Props) => {
    const { children, classes,onClick, loading=false, type="button" } = props
  return (
    <button disabled={loading} onClick={onClick} type={type} className={`py-2 px-3 disabled:cursor-not-allowed rounded-md text-white text-base bg-[#131340] ${classes}`}>{children || "button"}</button>
  )
}

export default JPButton