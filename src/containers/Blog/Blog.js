import React, { Component } from 'react';

import Posts from './Posts/Posts';
//import Post from '../../components/Post/Post';
//import FullPost from '../../components/FullPost/FullPost';
//import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';



class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">New Post</a></li>
                        </ul>
                    </nav>
                </header>

                <Posts />
                {/* 
                <section>
                    <FullPost 
                        id={this.state.selectedPostId}
                         />
                </section>
                <section>
                    <NewPost />
                </section>
                */}
            </div>
        );
    }
}

export default Blog;