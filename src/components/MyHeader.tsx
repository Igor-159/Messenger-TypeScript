import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {NavLink} from 'react-router-dom';
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const MyHeader: FC = () => {
    const {isAuth, user} = useTypedSelector(state => state.auth);
    const {logout} = useActions()


    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <div style={{color: 'white'}}>
                            {user.login}
                            {console.log(user.login)}
                        </div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>

                            <Menu.Item
                                onClick={logout}
                                key={1}
                            >
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item
                            key={1}
                        >
                            <NavLink to={RouteNames.LOGIN}>
                                Логин
                            </NavLink>
                            
                        </Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default MyHeader;
