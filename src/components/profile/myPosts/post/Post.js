import './post.css';

const Post = (props) =>{
    return (
        <div className=''>
            <img src=''/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}


export default Post;