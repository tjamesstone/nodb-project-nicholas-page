import React, {Component} from 'react'
const normal = "data:image/jpeg;base64,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"
const sad = "data:image/jpeg;base64,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"
const happy = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GrLk-9YVLf9d2MxpERrWtKjJpS2ZqU_udpFtmG7VNKUKIvKH"
export default class LikeNick extends Component{
    constructor( ){
        super()
        this.state ={
            likes : 0,
            img: normal
        
            
        }

        this.likeFn = this.likeFn.bind(this)
        this.dislikeFn = this.dislikeFn.bind(this)
    }

    displayFn(){
        console.log(this.state.img)
    }


    likeFn = () => {
        this.setState({
            likes: this.state.likes +1 
        }
        )
        
        
        }
    
    dislikeFn = () => {
        this.setState({
            likes: this.state.likes -1 
        }
       )
        
        }

    componentDidUpdate(prevProps, prevState){
        if(this.state.likes !== prevState.likes){
        if(this.state.likes > -5 && this.state.likes <5){
            this.setState({
                img: normal
            })
       } else if (this.state.likes >=5){
           this.setState({
               img: happy
           })
       } else if (this.state.likes <=-5){
           this.setState({
               img:sad
           })
       }
    //    console.log(this.state.likes)
    }}
    
    render(){
        console.log(this.state.likes)
        return(
            <div className="likenick">
                <img src={this.state.img} alt="Thumbs Up from Nick Cage"/>
                <h2>What Say Ye?</h2>
                <h3>Like or Disklike Nick</h3>
                <div className="upanddown">
                    <h2>{this.state.likes}</h2>
                    <button
                    onClick={this.dislikeFn}>
                        Dislike
                    </button>
                    <button
                    onClick={this.likeFn}
                    >Like</button>
                    
                </div>
            </div>
        )
    }
    }