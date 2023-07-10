import { useNavigate } from 'react-router-dom';
import React , {useState ,  useEffect} from 'react'
import "./style.scss"
import useFetch from "../../../hooks/useFetch"
import {  useSelector } from 'react-redux';
import Img from "../../../componants/lazyLoadImage/Img"
import ContentWrapper from "../../../componants/contentWrapper/ContentWrapper"

const HeroBanner = () => {

  const [background , setBackground] = useState("");
  const [query , setQuery] = useState("");

  const Navigate = useNavigate();
  const { url } = useSelector((state)=>state.home)
  const {data , loading} = useFetch("/movie/upcoming");

  useEffect(()=>{
    const bg = url.backdrop +  data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
    setBackground(bg);
  } ,[data])


  const searchQueryHandler = (event) =>{
    if(event.key ===  "Enter" && query.length >0){
      Navigate(`/search/${query}`);
    }
  }

  return (
    <div className="heroBanner">
      {!loading && <div className="backdrop-img">
        <Img src={background}/>
      </div>}
      <div className="opacity-layer">
      </div>
      <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">Millions of Movies , TV Shows and People to Discover , Explore Now..</span>

            <div className="searchInput">
              <input type="text" onKeyUp={searchQueryHandler} onChange={(e)=>setQuery(e.target.value)} placeholder="Search for a Movie or a TV-Show...." />
              <button onClick={()=>Navigate(`search/${query}`)}>Search</button>
            </div>
          </div>
      </ContentWrapper>
       
    </div>
  )
}

export default HeroBanner