import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import App from "../components/App";
import PostsIndex from "../components/PostsIndex";
import NewPosts from "../components/NewPosts";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Link to="/">App</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/posts/new">New Post</Link>
      <hr />
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/posts" component={PostsIndex} exact={true} />
        <Route path="/posts/new" component={NewPosts} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
