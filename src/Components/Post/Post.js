import React, { Component } from 'react';
import Navbar from "./../Navbar/Navbar";
import "./Post.css"
import Axios from 'axios';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post:{
                title:"",
                img:"",
                content:"",
                author_id:""
            }
        }
    }
    
    componentDidMount(){
        Axios.get("/api/post/"+this.props.match.params.id).then(res=>{
            this.setState({post:res.data})
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Navbar history={this.props.history}/>
                <div className="post_container">
                    <div className="top_info">
                        <h1>{this.state.post.title}</h1>
                        <div className="post_inner_container">
                            <p>by username</p>
                            <img src="#" />
                        </div>
                    </div>
                    <div className="bottom_info">
                        <img src={this.state.post.img} />
                        <p>{this.state.post.content}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;