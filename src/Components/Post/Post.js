import React, { Component } from 'react';
import Navbar from "./../Navbar/Navbar";

class Post extends Component {
    render() {
        return (
            <div>
                <Navbar history={this.props.history}/>
                Post
            </div>
        );
    }
}

export default Post;