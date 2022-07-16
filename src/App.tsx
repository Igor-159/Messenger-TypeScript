import React, {FC, useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import { Layout } from 'antd';
import './App.css';
import {useActions} from "./hooks/useActions";
import NavBar from './components/NavBar';
import MyHeader from './components/MyHeader';
const { Header, Sider, Content } = Layout;

const App:FC = () => {
    

    

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
