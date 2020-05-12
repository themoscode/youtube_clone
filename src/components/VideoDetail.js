import React from 'react';
import { Paper,Typography } from '@material-ui/core';

const VideoDetail = ({ video }) => {

    if (!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <React.Fragment>
                <div style={{position:'relative',width:'100%',paddingBottom:'56.25%',height:'0'}}>
                    <iframe style={{position: 'absolute',top:'0',left: '0',width: '100%',height: '100%'}}
                        frameBorder="0" width="100%" height="100%" title="Video Player" src={videoSrc} 
                    />
                </div>
                <Paper elevation={6} style={{padding:'15px'}}>
                    <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle2">{video.snippet.description}</Typography>
                </Paper>
            
        </React.Fragment>
    )
}

export default VideoDetail;