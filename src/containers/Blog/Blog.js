import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
//import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                exact 
                                to="/" >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/post/:id" exact component={FullPost} />
                    <Route path="/new-post" component={NewPost} />
                </Switch>

            </div>
        );
    }
}

export default Blog;