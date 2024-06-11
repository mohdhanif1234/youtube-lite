import { useEffect } from "react"
import { useSelector } from "react-redux"
import LeftNav from './LeftNav'


const Feed = () => {
  return (
    <>
      <div className="flex flex-row h-[calc(100%-56px)]">
        <LeftNav/>
      </div>
    </>
  )
}

export default Feed
