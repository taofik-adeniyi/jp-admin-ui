import React from 'react'

type Props = {}

const DrawDetail = (props: Props) => {
  return (
    <div className='space-y-5'>
        <div className='border-b border-dashed border-gray-500 p-5 flex flex-col'>
            <h1>Awoof</h1>
            <h2>Successfull Transaction</h2>
            <h2>12:58 pm, Aug 20,2023</h2>
        </div>
        <div className='p-5'></div>
        <div className='flex justify-between'>
            <h3>Player Name:</h3>
            <h3>Yusuf Pop</h3>
        </div>
        <div className='flex justify-between'>
            <h3>Phone Number:</h3>
            <h3>08028774177</h3>
        </div>
        <div className='flex justify-between'>
            <h3>Ticket Number:</h3>
            <h3>SA15-0204</h3>
        </div>
    </div>
  )
}

export default DrawDetail