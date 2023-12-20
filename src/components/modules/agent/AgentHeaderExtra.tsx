"use client"
import JPButton from '@/components/JPButton'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}


const AgentHeaderExtra = (props: Props) => {
  const router = useRouter()
  return (
    <div>
        <JPButton onClick={()=>router.push('/agent?show=true')}>Create Agent</JPButton>
    </div>
  )
}

export default AgentHeaderExtra