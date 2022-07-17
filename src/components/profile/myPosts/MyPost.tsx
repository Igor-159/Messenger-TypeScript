import './myPost.css';
import Post from './post/Post';
import {FC} from 'react'



import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import AddMyPostForm from './AddMyPostForm';
import { Layout } from 'antd';






const MyPost: FC =() =>{
    const {posts} = useTypedSelector(state => state.profile);
    const {addPostActionCreator} = useActions();

    
    let postsElement = posts.map(post => (<Post key={post.id} message={post.message} likesCount={post.likesCount}/>))

    let newPostBody = (newPost: string) =>{
        addPostActionCreator(newPost)
    } ;

    return(
        <Layout >
            My post
            <div>
                <AddMyPostForm newPost={newPostBody}/>
            </div>
            <div className=''> 
                {postsElement}
                
            </div>
        </Layout>
        
    )
}








export default MyPost;