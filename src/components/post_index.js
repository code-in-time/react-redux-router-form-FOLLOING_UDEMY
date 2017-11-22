import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';


class PostsIndex extends Component {

    renderPosts() {
        let s =[];
        for (const prop in this.props.posts) {
            s.push(<li className="list-group-item" key={this.props.posts[prop].id}>{this.props.posts[prop].title}</li>);
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