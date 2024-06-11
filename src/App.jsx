import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { fetchDataFromApi } from './redux/features/apiSlice'
import { apiData } from "../sampledata";
import Header from "./components/Header";
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import VideoDetails from './components/VideoDetails'

const App = () => {

  const selectCategories = useSelector(state => state.api.selectCategories)
  console.log(selectCategories)
  let data = useSelector(state => state.api.data)

  const dispatch = useDispatch();

  const fetchSelectedCategoryData = (query) => {
    dispatch(fetchDataFromApi(`search?q=${query}`))
    const { contents } = JSON.parse(apiData);
    data = contents
    console.log(data)
  }

  useEffect(() => {
    // if (data.length === 0) {
      fetchSelectedCategoryData(selectCategories)
    // }
  }, [selectCategories])

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />

          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
