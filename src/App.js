import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import { Layout, Menu, Breadcrumb, Icon, Typography, DatePicker, Table, Modal, Button } from 'antd';
const { Header, Content, Footer } = Layout;

const {RangePicker } = DatePicker;
const {Title} = Typography;
const ButtonGroup = Button.Group;
const EditableContext = React.createContext();

const data = [
    {
        "sap_id": "50006736",
        "name": "ADVFN PLC",
        "status": "ACTIVE",
        "inventory_type": "Aggregator",
        "actions": <Button type="primary" icon="edit" />
    },
    {
        "sap_id": "50006297",
        "name": "BAZAR",
        "status": "N/A",
        "inventory_type": "Owned and Operated",
        "actions": <Button type="primary" icon="edit" />
    }
];

function App() {
    const [showModal, setShowModal] = useState(false);
    function openModal(event) {
        event.preventDefault();
        setShowModal(true);
    }
    function handleModalOk() {
        setShowModal(false);
    }

    const columns = [
        {
            title: 'SAP ID',
            dataIndex: 'sap_id',
            key: 'sap_id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 200,
            // fixed: 'left',
            sorter: (a, b) => a.name.localeCompare(b.name),
            // render: text => <a href="void(0)" onClick={openModal}>{text}</a>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Inventory type',
            dataIndex: 'inventory_type',
            key: 'inventory_type',
            editable: true,
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            width: 20,
            fixed: 'right',
        },
    ];

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
                          <Title level={3}>Publisher Reports</Title>
                          {/*<p>From - To:</p>*/}
                          {/*<RangePicker onChange={onChange} style={{ margin: '0 0 24px' }}/>*/}
                          <Table
                              columns={columns}
                              dataSource={data}
                              size="middle"
                              scroll={{ x: true }}
                              rowKey={record => record.publisher_id}
                              pagination={{
                                showQuickJumper: true,
                                showSizeChanger: true,
                              }}
                              // pagination={false}
                          />
                      </Content>
                  </Layout>
              </Content>
              <Modal
                  title="Basic Modal"
                  visible={showModal}
                  onOk={handleModalOk}
                  onCancel={handleModalOk}
              >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
              </Modal>
          </Layout>
      </Router>
  );
}

export default App;
