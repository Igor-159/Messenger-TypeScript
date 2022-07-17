import React, {FC, useEffect} from 'react';
import {Card, Layout, Row} from "antd";
import LoginForm from "../components/LoginForm";
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';


const Login: FC = () => {
    const {user} = useTypedSelector(state => state.auth)
    const navigate = useNavigate()

    
        
        

    return (
        <Layout>
            
            <Row justify="center" align="middle" className="h100">
                <Card>
                    <LoginForm/>
                </Card>
            </Row>
        </Layout>
    );
};

export default Login;
