import React from 'react';
import {Button, Col, Row, Table, Typography} from 'antd';
import {PUBLISHER_data, URL_FORM_PUBLISHER} from './App';
import {Link} from 'react-router-dom';
const {Title} = Typography;

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

export const PublisherList = () => {
    return (
        <>
            <Row type="flex" justify="space-between">
                <Col span={8}><Title level={3}>Publisher Reports</Title></Col>
                <Col span={2}>
                    <Link to={URL_FORM_PUBLISHER}>
                        <Button type="primary">
                            New publisher
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={PUBLISHER_data}
                size="middle"
                scroll={{ x: true }}
                rowKey={record => record.id}
                pagination={{
                    showQuickJumper: true,
                    showSizeChanger: true,
                }}
                // pagination={false}
            />
            <Link to={URL_FORM_PUBLISHER}>
                <Button type="primary">
                    New publisher
                </Button>
            </Link>
        </>
    );
};
