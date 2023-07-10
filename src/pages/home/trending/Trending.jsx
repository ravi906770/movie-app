import React ,{useState}from 'react'
import ContentWrapper from "../../../componants/contentWrapper/ContentWrapper"
import SwitchTabs from '../../../componants/switchTabs/SwitchTabs'
import useFetch from "../../../hooks/useFetch"
import Carousel from '../../../componants/carousel/Carousel'



const Trending = () => {

    const [endPoint , setEndPoint] = useState("day");

    const {data , loading} = useFetch(`/trending/all/${endPoint}`);

    const onChangeTab = (tab)=>{
        setEndPoint(tab === "Day" ? "day" : "week" )
    }

  return (
    <div className="carouselSection">
        <ContentWrapper>
            <div className="carouselTitle">Trending</div>
            <SwitchTabs data={["Day","Week"]} onTabChange={onChangeTab}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending