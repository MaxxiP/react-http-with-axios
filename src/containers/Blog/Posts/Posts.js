import React, { Component } from 'react';
//import axios from 'axios';
// getting axios from my own instance
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import { Link } from 'react-router-dom';

import './Posts.css';

class Posts extends Component{
    state = {
        posts: []
    }

    componentDidMount(){
        //console.log(this.props);
        // uses promises introduced in ES6, 
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Miles'
                    }
                });
                // the response object has an array data inside
                this.setState({ posts: updatedPosts });
                //console.log(response);
            })
            .catch(error => {
                console.log(error);
                //this.setState({ error: true });
            });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render(){
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Link to={'/post/' + post.id} key={post.id} ><Post 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} /></Link>;
            });
        }

        return(
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;