import React ,{useState}from 'react'
import ContentWrapper from "../../../componants/contentWrapper/ContentWrapper"
import SwitchTabs from '../../../componants/switchTabs/SwitchTabs'
import useFetch from "../../../hooks/useFetch"
import Carousel from '../../../componants/carousel/Carousel'



const TopRated = () => {

    const [endPoint , setEndPoint] = useState("movie");

    const {data , loading} = useFetch(`/${endPoint}/top_rated`);

    const onChangeTab = (tab)=>{
        setEndPoint(tab === "Movies" ? "movie" : "tv" )
    }

  return (
    <div className="carouselSection">
        <ContentWrapper>
            <div className="carouselTitle">Top-Rated</div>
            <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onChangeTab}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
    </div>
  )
}

export default TopRated