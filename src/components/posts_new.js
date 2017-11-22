import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'; 

import { createPost } from '../actions/index'


class PostsNew extends Component {


    renderField(field) {


            const f = `form-group ${field.meta.touched && field.meta.error ? 'hasdanger' : ''}`

            return (
                <div className={f}>
                    <label>{field.label}</label>
                    <input className="form-control" type="text" {...field.input}/>
                    <div className="text-danger">
                        {field.meta.touched ?  field.meta.error : ''}
                    </div>
                </div>
            );
    }

    onSubmit(values) {
        console.log('hghghgh',values);
        this.props.createPost(values, () => {

            this.props.history.push('/');

        });

    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label="Title" name="title" component={this.renderField} />
                <Field label="Categories" name="categories" component={this.renderField} />
                <Field label="Post Content" name="content" component={this.renderField} />
                <button type="submit" className="btn btn-primary">SUBMIT</button>
                <Link to="/" className="btn btn-danger">CANCEL</Link>
            </form>
        );
    }
};

function validate(values) {
     console.log(values);
     const errors = {}

     if (!values.title) {
         errors.title = "Enter a title";
     }

     if (!values.categories) {
         errors.categories = "Enter a category";
     }

     if (!values.content) {
         errors.content = "Enter a content";
     }

     return errors;
}

export default reduxForm({
    form : 'PostNewsForm',
    validate
})(
    connect(null, {createPost})(PostsNew)
);
