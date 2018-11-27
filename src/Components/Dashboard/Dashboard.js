import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Dashboard.css"
import Axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:"",
            checkbox:true,
            posts:[],
            search_value:"",
            user_id:null
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.changeCheckbox = this.changeCheckbox.bind(this);
        this.searchPosts = this.searchPosts.bind(this);
        this.resetSearch = this.resetSearch.bind(this);
    }
    
    componentDidMount(){
        //TODO - also send back the person on session so we can filter by the user that is logged in.
        Axios.get("/api/posts").then(res=>{
            // console.log(res.data)
            this.setState({
                posts:res.data[0],
                user_id:res.data[1]
            })
        }).catch(err=>console.log(err))
    }
    changeHandler(value){
        this.setState({search_value:value})
    }
    changeCheckbox(e){
        this.setState({checkbox:e.target.checked})
    }
    searchPosts(){
        this.setState({search:this.state.search_value})
    }
    resetSearch(){
        this.setState({search:""})
    }
    render() {
        console.log(this.state)
        let listPosts = this.state.posts.filter(post=>{
            if(this.state.checkbox){
                return true
            }
            else{
                if(post.author_id === this.state.user_id){
                    return false
                }
            }
        }).filter(post=>post.title.toUpperCase().includes(this.state.search.toUpperCase())).map(post=>{
            return<div onClick={()=>this.props.history.push("/post/"+post.id_post)} key={post.id_post} className="post_card">
                <h1>{post.title}</h1>
                <div className="sub_post_card">
                    <div>by {post.username}</div>
                    <img src={post.profile_pic} alt="Profile"/>
                </div>
            </div>
        })
        return (
            <div className="logged_in_main_content">
                <Navbar history={this.props.history}/>
                <div className="dashboard_main_section">
                    <div className="filter_container">
                       <input onChange={(e)=>this.changeHandler(e.target.value)} value={this.state.search_value} placeholder="Search by Title"/>
                       <img onClick={this.searchPosts} className="search_btn" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAeJJREFUSA2tlM0rBGEcx3dWEREp4oBVrvsXLJEoTsR/QDk6ydt1E2ccuIniKGeEi4MLbY6SAzaRUt5C1uer9pkZM7PM2m99muf5vT0zz/yeJxLxUSaTKYch2IJzeIF7SMECdPikeUzWTwuJI9iSUA0HcAhpKIVm6IEWkG/UsqwUz9yiaAmswScsQ31QBr4uOIEnGAyKM3aCVFjB/caYY0CcXmYVPqA7MBTnCOiN/1Q4W4h4C/Rf9D9qs3bzxKifdwNLxhhiQF4V3MGiJw2juuIN6jzOPxrInYRnKHOlYNBnbbuMISfkx0Dqc6ZGmcRB7Za3aMcLkq9BtYxUXC2nPv6vVMPVvir+Ajog/5VqvDqLqPgVxJzGsGP2uoicBlAtIxXfh15jyW+QIK0CdCXYYtV2kDpta7gRuRtwBpYnE+MeHEOxx/mLgZxW0Oke9g3FEYdHWAHv6r5ZkQixTZCGXdAW+wvnALzDJlT6R9lWYhKgwtKM7QkYEaSrVJfQLYxDozOUeRTaYB20FTuQBGnKGes7JqgG5kHXr3QJR3AKDyDp5+lO+t4KnhMguRYI3F8CdSh0T+tI6+TpgKiP1W7HHPkMTyPiJ5jMwTS+WeMo1EALgOT6gkLVVwdlF9CXFF4sMAapL60vtT4ftHlFAAAAAElFTkSuQmCC" alt="search"/>
                       <button onClick={this.resetSearch}>Reset</button>
                       <div>My Posts</div>
                       <input type="checkbox" onChange={this.changeCheckbox} checked={this.state.checkbox}/>
                    </div>
                    <div className="posts_container">
                        {listPosts}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;