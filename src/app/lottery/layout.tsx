import React from 'react'

type Props = {
    children:React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <div className="flex">
    <aside className='w-2/12 bg-primary-100'></aside>
        <div className="w-10/12">
        <header className="w-full p-5 bg-gray-100 min-h-[80px] border-b border-b-gray-400"></header>
        <div className="min-h-[calc(100vh-80px)] bg-white px-5">
            {props.children}
        </div>
      </div>
    </div>
  )
}

export default Layout