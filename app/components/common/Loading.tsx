import { Spinner } from '@nextui-org/react'
import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <Spinner color="warning" size="lg" />
    <span>Fetch data failed</span>            
 </div>
  )
}

export default Loading