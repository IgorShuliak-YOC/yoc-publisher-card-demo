import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Typography, Tabs} from 'antd';
import {PublisherForm} from './PublisherForm';
import {PUBLISHER_data} from './App';
const {Title} = Typography;
const { TabPane } = Tabs;

export const PublisherCard = ({ match }) => {
    const publisherInfo = PUBLISHER_data[match.params.id];

    return (
        <>
            <Link to={'/'}><Button type="link">Back to the list</Button></Link>
            <Title>Publisher</Title>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Basic information" key="1">
                    <PublisherForm publisherInfo={publisherInfo || {}} blockBase={typeof publisherInfo !== 'undefined'} />
                </TabPane>
                {typeof publisherInfo !== 'undefined' && <TabPane tab="Pricing information" key="2">
                    Pricing information will be ready soon
                </TabPane>}
            </Tabs>
        </>
    );
};
