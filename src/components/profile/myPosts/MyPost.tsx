import './myPost.css';
import Post from './post/Post';
import {FC, useState} from 'react'

import { maxLengthCreator, required } from '../../../utils/validators/validator';

import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import AddMyPostForm from './AddMyPostForm';



const maxLength10 =  maxLengthCreator(10);


const MyPost: FC =() =>{
    const {posts} = useTypedSelector(state => state.profile);
    const {addPostActionCreator} = useActions();

    
    let postsElement = posts.map(post => (<Post key={post.id} message={post.message} likesCount={post.likesCount}/>))

    let newPostBody = (newPost: string) =>{
        addPostActionCreator(newPost)
    } ;

    return(
        <div >
            My post
            <div>
                <AddMyPostForm newPost={newPostBody}/>
            </div>
            <div className=''> 
                {postsElement}
                
            </div>
        </div>
        
    )
}








export default MyPost;