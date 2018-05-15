import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './App.module.less';
import {Layout, Breadcrumb, Menu, Icon, Avatar, Dropdown} from 'antd';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Home';
import Contract from './Contract';
import axios from 'axios';
import {avatarmenu} from "./AvatarDropDownList";

const {SubMenu} = Menu;
const {Header, Sider, Content} = Layout;

const contentHeight = window.innerHeight - 64;

class App extends Component {
    constructor(){
        super();
        this.state = {
            "nickname": '',
            "avatar": ''
        }
    }
    getUserInfo(){
        axios.get('https://easy-mock.com/mock/5af99d6ffa44784111a769a0/react/userInfo')
            .then((response) => {
                let data = response.data;
                if(data.success){
                    this.setState({
                        "nickname": data.data.nickname,
                        "avatar": data.data.avatar
                    });
                }
            });
    }

    componentDidMount(){
        this.getUserInfo();
    }

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Header className="header">
                        {/*<div className="logo" />*/}
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{lineHeight: '64px'}}
                            className={styles.fl}
                        >
                            <Menu.Item key="1">
                                <Link to="/">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/contract">合同管理</Link>
                            </Menu.Item>
                            {/*<Menu.Item key="3">nav 3</Menu.Item>*/}
                        </Menu>
                        {/*<UserAvatar />*/}

                        <Dropdown overlay={avatarmenu}>
                            <div className={styles.avatar}>
                                <Avatar src={this.state.avatar} />
                                <span className={styles.nickname}>{this.state.nickname}</span>
                            </div>
                        </Dropdown>
                    </Header>
                    <Layout style={{height: contentHeight}}>
                        <Sider width={200} style={{background: '#fff'}}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%', borderRight: 0}}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="user"/>subnav 1</span>}>
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="laptop"/>subnav 2</span>}>
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="notification"/>subnav 3</span>}>
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{padding: '24px 24px'}}>
                            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/contract" component={Contract}/>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
