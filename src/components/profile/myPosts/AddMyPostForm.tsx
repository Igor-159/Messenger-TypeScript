import { FC, useState } from "react";
import { Button, Form, Input } from 'antd';
import { rules } from '../../../utils/rules';
const { TextArea } = Input;

interface AddMyPostFormProps{
    newPost: (postText: string) => void
}


const AddMyPostForm: FC<AddMyPostFormProps> = ({newPost}) => {
    
    const [postText, setPostText] = useState<string>('')
    console.log(postText)

    const onSubmit = () => {
        newPost(postText)
        setPostText('')
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
                    Создать пост
                </Button>
            </Form.Item>
        </Form>
    );
};


export default AddMyPostForm;