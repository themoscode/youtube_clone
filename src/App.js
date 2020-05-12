import React from 'react';
import { Grid } from '@material-ui/core';
//import  SearchBar  from './components/SearchBar';
//import  VideoDetail  from './components/VideoDetail';
import {SearchBar,VideoDetail,VideoList} from './components';
import axios from 'axios';

class App extends React.Component {
  
  state = {
      videos:[],
      selectedVideo:null,
  }

  componentDidMount(){
      this.handleSubmit('react js')
  }

  onVideoSelect = (video) => {
        this.setState({selectedVideo:video});
  }

  handleSubmit = (searchTerm) => {
    axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: 'AIzaSyBtAasotd_DO5LZOdOH00z072l70MdEkYU',
        part: "snippet",
        q: searchTerm
      }
    }).then(response => {
        console.log(response.data.items ) 
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        });
        console.log(this.state);
    });
}

  render () {
    const { selectedVideo,videos } = this.state;
    return(
        <div style={{padding:"40px"}}>
            <Grid justify="center" container spacing={0} >
                <Grid item xs={12}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
      
    )
  }
}



export default App;
