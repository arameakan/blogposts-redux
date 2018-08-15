import React, { Component } from "react";
import { reduxForm } from "redux-form";

class NewPosts extends Component {
  render() {
    const {
      fields: { title, categories, content },
      handleSubmit
    } = this.props;
    console.log(title);
    return (
      <form onSubmit={handleSubmit}>
        <h3>Create Form</h3>
        <div>
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Categories</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Content</label>
          <textarea name="content" id="content" cols="30" rows="10" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "NewPostsForm",
  fields: ["title", "categories", "content"]
})(NewPosts);
