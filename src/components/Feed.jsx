import { useEffect } from "react"
import { useSelector } from "react-redux"
import LeftNav from './LeftNav'
import VideoCard from './VideoCard'
import { apiData } from "../../sampledata";


const Feed = () => {

  const loading = useSelector(state => state.api.loading)
  // const searchResults = useSelector(state => state.api.data);
  let searchResults;
  const { contents } = JSON.parse(apiData);
  searchResults = contents

  useEffect(() => {
    document.getElementById('root').classList.remove('custom-h')
  }, [])

  return (
    <>
      <div className="flex flex-row h-[calc(100%-56px)]">
        <LeftNav />
        <div className="grow w-[calc(100%-240px)] h-full overflow-auto bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {
              !loading && searchResults && searchResults?.map((item) => {
                if (item.type !== 'video') return false
                return (
                  <VideoCard
                    key={item?.video?.videoId}
                    video={item?.video}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Feed
