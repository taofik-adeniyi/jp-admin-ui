import React from 'react'
import winnerLogo from '@/assets/images/png/winner.png'
import Image from 'next/image'
type Props = {}

const Winner = (props: Props) => {
  return (
    <div className='bg-white p-10 w-full'>
        <Image src={winnerLogo} alt="winner" width={380} height={252} priority />
    </div>
  )
}

export default Winner