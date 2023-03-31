import React from 'react'

const VidoeDetail = ({video})=>{
    if(!video){
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
        <div>
            <div className="ui embed">
                <iframe title='video player' src={videoSrc} frameBorder="0"></iframe>
            </div>
            <h4 className='ui header'>
                <div >{video.snippet.title}</div>
            </h4>
        </div>
        
    )
};

export default VidoeDetail;