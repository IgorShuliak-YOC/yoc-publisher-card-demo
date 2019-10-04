import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
import {PublisherList} from './PublisherList';
import {PublisherCard} from './PublisherCard';
const { Header, Content } = Layout;

export const URL_FORM_PUBLISHER = '/form-publisher/';
export const PUBLISHER_data = [
    {
        "id": 0,
        "sap_id": "50006736",
        "name": "ADVFN PLC",
        "status": "ACTIVE",
        "inventory_type": "Aggregator",
        "actions": (
            <Link to={`${URL_FORM_PUBLISHER}0`}>
                <Button type="primary" icon="edit" />
            </Link>
        ),
    },
    {
        "id": 1,
        "sap_id": "50006297",
        "name": "BAZAR",
        "status": "N/A",
        "inventory_type": "Owned and Operated",
        "actions": (
            <Link to={`${URL_FORM_PUBLISHER}1`}>
                <Button type="primary" icon="edit" />
            </Link>
        ),
    }
];

function App() {
    return (
        <Router>
            <Layout>
                <Header className="header">
                    <div className="logo"><Icon type="smile" style={{ fontSize: '32px', verticalAlign: "middle", marginRight: '24px' }} /></div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">Reporting</Menu.Item>
                        <Menu.Item key="2">Management</Menu.Item>
                        <Menu.Item key="3">Administration</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Reporting</Breadcrumb.Item>
                        <Breadcrumb.Item>Publisher Reports</Breadcrumb.Item>
                        <Breadcrumb.Item>YOC Central Eastern Europe GmbH</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Route path={'/'} exact component={PublisherList} />
                            <Route path={`${URL_FORM_PUBLISHER}`} exact component={PublisherCard}/>
                            <Route path={`${URL_FORM_PUBLISHER}:id`} component={PublisherCard}/>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        </Router>
    );
}

export default App;
