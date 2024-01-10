import React from 'react';
import ReactDOM from 'react-dom/client';
import Posts, {loader as postLoader} from './Routes/Posts';
import reportWebVitals from './reportWebVitals';
import './index.css';
import NewPost, {action as newPostAction} from './Routes/NewPost';
import RootLayout from './Routes/RootLayout';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import PostDetails, {loader as postDetailsLoader} from './Routes/PostDetails';

const routerConst = createBrowserRouter([
  {path: '/', 
  element: <RootLayout/>, 
  children: [
    { 
      path: '/', 
      element: <Posts/>, 
      loader: postLoader, 
      children: [
        {path: '/create-post', element: <NewPost />, action: newPostAction},
        {path: '/:id', element: <PostDetails />, loader: postDetailsLoader}
      ]
    },
  ]
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {routerConst}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
