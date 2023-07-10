import React, { useState } from "react";

import "./style.scss";

import ContentWrapper from "../../../componants/contentWrapper/ContentWrapper";
// import { PlayIcon } from "../playIcon";
import { PlayIcon } from "../PlayBtn";
import VideoPopup from "../../../componants/videoPopup/VideoPopup";
import Img from "../../../componants/lazyLoadImage/Img";

const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="videosSection">
            <ContentWrapper>
                <div className="sectionHeading">Official Videos</div>
                {!loading ? (
                    <div className="videos">
                        {data?.results?.map((video)=>{
                           return <div className="videoItem" key={video.id} onClick={()=>{setVideoId(video.key); setShow(true)}}>
                                <div className="videoThumbnail">
                            <Img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}/>
                            <PlayIcon/>
                            <div className="videoTitle">
                                {video.name}
                            </div>
                        </div>
                            </div>
                            
                        })}
                       
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;
