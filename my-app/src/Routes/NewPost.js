import classes from "./NewPost.module.css";
import {Link, Form, redirect} from 'react-router-dom';
import Modal from '../Components/Modal';

function NewPost()
{
    return(
        <Modal>
        <Form method = 'post' className = {classes.form}>
            <p>
               <label htmlFor='body'>Body</label>
               <textarea id='body' name="body" required rows={3}  />
            </p>
            
            <p>
               <label htmlFor='body'>Name</label>
               <textarea id='body' name="name" required />
            </p>
            <p className = {classes.actions}>
                <Link to='..' type='button'>Cancel</Link>
                <button>Submit</button>
            </p>
        </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({request}){
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body:JSON.stringify(postData),
        headers:{
            'Content-Type': 'application/json'
        }
    });

    return redirect('/');
}