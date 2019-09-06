import React, {Component} from 'react'

export default class Videos extends Component {

    render(){
        return(
            <div className="videoscontainer">
                <h1>We Hope This Site Helps You Feel Like Nick Does</h1>
               {/* <h2>Nick When He's Sad</h2> */}
                <div className="bees">
                    <iframe 
                     width="560" 
                     title="video"
                      height="315" 
                      src="https://www.youtube.com/embed/EVCrmXW6-Pk?autoplay=1&loop=1&&showinfo=0&&&controls=0" frameBorder="0" 
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen></iframe>
                </div>
                {/* <div className="nat2">
                    <h2>Nick When He's Silly</h2>
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/zMZ9S1p8XAs?start=40?autoplay=1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
                </div> */}
            </div>
        )
    }
}