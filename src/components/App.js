import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VidoeDetail from "./VideoDetail";

const App =()=>{
    const [videos, setVideos] = useState([]);
    const [selectedVideo,setSelectedVideo] = useState(null);

    useEffect(()=>{
        onTermSubmit('lofi')
    },[]);
 
    const onTermSubmit = async term =>{
        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0])
    };

    return (<div className=" ui container">
            <SearchBar onFormSubmit={onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VidoeDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelectedVideo} videos = {videos} />
                    </div>
                </div>
            </div>
        </div>)
};


export default App;