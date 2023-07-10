import React ,  { useEffect }  from "react"
import { BrowserRouter , Route, Routes   } from "react-router-dom"
import { fetchDataFromApi } from "./utils/api"
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration , getGeners } from "./store/homeSlice"
import Header from "./componants/header/Header"
import Footer from "./componants/footer/Footer"
import Home from "./pages/home/Home"
import Explore from "./pages/explore/Explore"
import SearchResult from "./pages/searchResult/SearchResult"
import Details from "./pages/details/Details"
import PageNotFound from "./pages/404/PageNotFound"


const App = () => {

  const dispatch = useDispatch()
  const { url } = useSelector((state)=>
    state.home
  )
  console.log(url)

  useEffect(()=>{
    fetchApiConfig()
    genersCall()
  }, [])

  const fetchApiConfig = () =>{
    fetchDataFromApi("/configuration").then((res)=>{
      console.log(res)
      const url = {
        backdrop : res.images.secure_base_url + "original",
        poster : res.images.secure_base_url + "original",
        profile : res.images.secure_base_url + "original"
      }
      dispatch(getApiConfiguration(url))
    })
  }


  const genersCall = async ()=>{
    let promises = []
    let endPoints= ["tv" , "movie"]
    let allGeners = {}

    endPoints.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    
    const data = await Promise.all(promises)
    data?.map(({genres})=>{
      return genres?.map((item)=>(allGeners[item.id] = item))
    })
    dispatch(getGeners(allGeners));
  }



  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:mediaType/:id" element={<Details/>}/>
        <Route path="/search/:query" element={<SearchResult/>}/>
        <Route path="/explore/:mediaType" element={<Explore/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
