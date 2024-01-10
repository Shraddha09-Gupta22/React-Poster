import classes from './Post.module.css';
import {Link } from 'react-router-dom';
function Post({id, name, body}){
    return (
        <li className = {classes.post}>
            <Link to={id }>
               <h1 className = {classes.name}> {name}</h1>
               <p className = {classes.body}> {body} </p>
            </Link>
        </li>
    );
}

export default Post;