import React from 'react'

type Props = {
    params: {agentId : string}
}

const AgentDetail = (props: Props) => {
    const { params : { agentId }} = props
  return (
    <div>
        <div></div>
        <div></div>
        <div>
            <h1>Official Information</h1>
        </div>
    </div>
  )
}

export default AgentDetail