import './myPost.css';
import Post from './post/Post';
import {FC} from 'react'
import { Divider, List, Typography } from 'antd';


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
            
            <div style={{marginTop: '20px'}}>
                <AddMyPostForm newPost={newPostBody}/>
            </div>
            <Divider orientation="left">My post</Divider>
                <List
                size="large"
                bordered
                dataSource={postsElement}
                renderItem={item => <List.Item>{item}</List.Item>}
                />
        </Layout>
        
    )
}








export default MyPost;