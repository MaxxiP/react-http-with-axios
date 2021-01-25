import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
//import axios from 'axios';
// getting axios from my own instance
import axios from '../../axios';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount(){
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
                //console.log(error);
                this.setState({ error: true });
            });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render () {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost 
                        id={this.state.selectedPostId}
                         />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;