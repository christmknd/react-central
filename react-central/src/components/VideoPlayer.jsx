import React from 'react'
import ReactPlayer from 'react-player';
import '../stylesheets/videoplayer.css'



    function VideoPlayer() {

        return (
            <div className='video'>
            <ReactPlayer 
            width='760px'
            height='380px'
            url="https://www.youtube.com/watch?v=9JZHodNR184"/>
            </div>
        )
   
    }    

export default VideoPlayer;