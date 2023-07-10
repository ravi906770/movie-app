import React from "react";

import Carousel from "../../../componants/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Carousel
            // title="Recommendations"
            // data={data?.results}
            // loading={loading}
            // endpoint={mediaType}
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endPoint={mediaType}
        />
    );
};

export default Recommendation;