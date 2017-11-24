import React, {Component, version} from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostShow extends Component {

    constructor() {
        super();
        this.clickHandlerDelete = this.clickHandlerDelete.bind(this);
    }

    componentDidMount() {
        // const id = this.props.match.params.id
        const {id} = this.props.match.params
        this.props.fetchPost(id);
    }

    clickHandlerDelete(event) {
        const {id} = event.target;
        console.log('delete', id);

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
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
                <button id={post.id} onClick={this.clickHandlerDelete} className="btn btn-danger">DELETE</button>
                
            </div>
        );
    }
}

function mapStateToProps({posts}, ownProps) {
    return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);

