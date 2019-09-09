import React, {Component} from 'react'


import axios from 'axios'

export default class Origin extends Component{
    constructor(){
        super()
        this.state = {
            hometown: '',
            currentcity: '',
            displayinfo: false
        }
        this.fetchData = this.fetchData.bind(this)
    }

    

    fetchData (){
         
        axios.get('http://geodb-free-service.wirefreethought.com/v1/geo/cities/126398').then( res => {
            // console.log(res.data)
            this.setState({hometown: res.data.data})
        
            
        })
        axios.get('http://geodb-free-service.wirefreethought.com/v1/geo/cities/127930').then( res => {
            // console.log(res.data)
            this.setState({currentcity: res.data.data})
    
            
        })
    
    }

    displayInfoFn = () => {
        this.setState({ displayinfo: true})
    }
    

    render (){

        return(
            <div className="realorigin">
                <h1>Learn about Nick's Residential History</h1>
                <button className="learnmore" onClick={this.fetchData}>Learn</button>
            <div className="origin">
                <div className="hometown">
                    <h2>Nick Cage's Hometown</h2>
                    <h6>City: {this.state.hometown.name}, {this.state.hometown.region}, {this.state.hometown.country}</h6>
                    <h6>Population: {this.state.hometown.population}</h6>
                    <h6>Elevation: {Math.ceil(this.state.hometown.elevationMeters *3.28084)} ft</h6>
                    
                </div>
                <div className="currentcity">
                    <h2>Nick Cage's Current City</h2>
                     <h6>City: {this.state.currentcity.name}, {this.state.currentcity.region}, {this.state.currentcity.country}</h6>
                    <h6>Population: {this.state.currentcity.population}</h6>
                    <h6>Elevation: {Math.ceil(this.state.currentcity.elevationMeters *3.28084)} ft</h6>
                    
                </div>
                
            </div>
            </div>
        )
    }
}