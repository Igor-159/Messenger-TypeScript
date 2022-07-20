import React, {FC, useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import { Layout } from 'antd';
import './App.css';
import {useActions} from "./hooks/useActions";
import NavBar from './components/Navbar';
import MyHeader from './components/MyHeader';
import { userInfo } from 'os';
import { useTypedSelector } from './hooks/useTypedSelector';
import { Navigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const App:FC = () => {
    const {user, isAuth} = useTypedSelector(state => state.auth);
    

    useEffect(()=> {
        <Navigate to={`/profile/${user.id}`}/>
    },[])
    

    return (
        <Layout>
            <Header><MyHeader/></Header>
            <Layout>
                <Sider><NavBar/></Sider>
                <Content><AppRouter /></Content>
            </Layout>       
        </Layout>
    );
};

export default App;
