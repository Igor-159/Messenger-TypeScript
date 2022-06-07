import { FC, useState } from "react";
import { Button, Form, Input } from 'antd';
import { rules } from '../../../utils/rules';
const { TextArea } = Input;

interface AddMyPostFormProps{
    newPost: (postText: string) => void
}


const AddMyPostForm: FC<AddMyPostFormProps> = ({newPost}) => {
    
    const [postText, setPostText] = useState<string>('')
    

    const onSubmit = () => {
        newPost(postText)
        
    }

    return (
        <Form
            onFinish={onSubmit}
        >
            
            <Form.Item
                label="post"
                name="post"
                rules={[rules.required("Пожалуйста введите post")]}
            >
                <TextArea
                    value={postText}
                    onChange={e => setPostText(e.target.value)}
                />
            </Form.Item>
            
            <Form.Item>
                <Button type="primary" htmlType="submit" >
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};


export default AddMyPostForm;