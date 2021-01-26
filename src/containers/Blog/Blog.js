import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Posts from './Posts/Posts';
//import Post from '../../components/Post/Post';
//import FullPost from '../../components/FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';



class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* evaluates full apth to be exact the given path 
                <Route path="/" exact render={() => <Posts />} />
                <Route path="/new-post" exact render={() => <h1>New Post</h1> }/>
                */}

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
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