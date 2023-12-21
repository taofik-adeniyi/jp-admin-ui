import PagesLayout from '@/components/PagesLayout'
import React from 'react'

type Props = {
    children:React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <PagesLayout>{children}</PagesLayout>
  )
}

export default Layout