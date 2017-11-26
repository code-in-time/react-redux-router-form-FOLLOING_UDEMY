import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';


class PostsIndex extends Component {
    componentWillMount () {
        
    }

    renderPosts() {
        let s =[];
        for (const i in this.props.posts) {
            const linkURL = '/post/'+this.props.posts[i].id;
            s.push(
                <li className="list-group-item" key={this.props.posts[i].id}>
                    title: {this.props.posts[i].title} |
                    id: {this.props.posts[i].id} |
                    <Link to={linkURL} className="btn btn-primary">goTO</Link>
                </li>
            );
        }

        return s;

    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        console.log('xx',this.props.posts);
        return (
            <div>
                <div className="text-xs-right">
                    <Link  className="btn btn-primary" to="posts/new" >Add a post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
};

function mapStateToProps (state) {
    return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);