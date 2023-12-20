"use client"
import JPButton from '@/components/JPButton'
import React from 'react'

type Props = {}

const CreateAgent = (props: Props) => {
  return (
    <div className="w-[600px] bg-white border border-gray-800 p-2">
      <div className="w-10/12 mx-auto my-16 text-center">
        <h1 className="text-[22px] text-[#2F2F30]">Agent Information</h1>
        <p className="text-[#7C7C7E] text-sm mb-8 mt-2">
        Provide the following information to create an agent space
        </p>

        <div className="flex flex-col space-y-3">
          <div className="w-full flex flex-col items-start mb-2">
            <label>Agent's Name</label>
            <input
              type="text"
              placeholder="Enter agent's name"
              className="w-full rounded-md outline-none p-4 bg-transparent border border-primary-100 focus:border-primary-100 hover:border-primary-100"
            />
            <div className="flex w-full justify-between mt-1">
              {/* <p className="text-red-700 capitalize p-0 m-0">error</p> */}
            </div>
          </div>


          <div className="w-full flex flex-col items-start mb-2">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="Enter email address"
              className="w-full rounded-md outline-none p-4 bg-transparent border border-primary-100 focus:border-primary-100 hover:border-primary-100"
            />
            <div className="flex w-full justify-between mt-1">
              {/* <p className="text-red-700 capitalize p-0 m-0">error</p> */}
            </div>
          </div>

          <div className="w-full flex flex-col items-start mb-2">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full rounded-md outline-none p-4 bg-transparent border border-primary-100 focus:border-primary-100 hover:border-primary-100"
            />
            <div className="flex w-full justify-between mt-1">
              {/* <p className="text-red-700 capitalize p-0 m-0">error</p> */}
            </div>
          </div>
    
        </div>

        <div className="mt-16 mb-5">
          <JPButton classes="w-full py-4 text-lg">Create Agent</JPButton>
        </div>
      </div>
    </div>
  )
}

export default CreateAgent