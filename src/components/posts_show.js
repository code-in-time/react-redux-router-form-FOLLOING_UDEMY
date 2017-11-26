import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostShow extends Component {

    componentDidMount() {
        // const id = this.props.match.params.id
        //if (!this.props.post) {
            const {id} = this.props.match.params
            this.props.fetchPost(id);
        //}

    }

    onDeleteClick() {
        const {id} =  this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {

        const { post } = this.props;

        if (!post) {

            return <div>LOADING...</div>
       }

        return (
            <div>
                <Link to="/" className="btn btn-primary">Back To Index</Link>
                <button 
                    to="/"
                    className="btn btn-danger pull-xs-right" 
                    onClick={this.onDeleteClick.bind(this)}
                >DELETE</button>

                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({posts}, ownProps) {
    return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);

