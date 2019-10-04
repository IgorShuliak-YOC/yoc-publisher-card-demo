import React, {useState} from 'react';
import {Form, Input, Divider, Select, DatePicker, Switch, Button} from 'antd';
import {Link, Redirect} from 'react-router-dom';
import {URL_FORM_PUBLISHER, PUBLISHER_data} from './App';
const {Option} = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
    },
};

export const PublisherForm = ({ publisherInfo, blockBase }) => {
    const [publisherData, setPublisherData] = useState(publisherInfo);
    const [redirectUser, setRedirectUser] = useState(false);

    const getOnFieldChange = (fieldName) => {
        return (e) => {
            setPublisherData({
                ...publisherData,
                [fieldName]: e.target.value,
            })
        };
    };

    const onSubmitClick = () => {
        setRedirectUser(true);
    };

    if (redirectUser) {
        const newPublisherId = PUBLISHER_data.length;
        const newPublisher = {
            ...publisherData,
            id: newPublisherId,
            "actions": (
                <Link to={`${URL_FORM_PUBLISHER}${newPublisherId}`}>
                    <Button type="primary" icon="edit" />
                </Link>
            ),
        };

        PUBLISHER_data.push(newPublisher);

        return (
            <Redirect to={`${URL_FORM_PUBLISHER}${newPublisher.id}`} />
        );
    }

    return (
        <Form {...formItemLayout}>
            <Form.Item label={'Company domain'}>
                <Input
                    value={publisherData.companyDomain}
                    onChange={getOnFieldChange('companyDomain')}
                />
            </Form.Item>
            <Form.Item label={'Inventory type'}>
                <Select defaultValue="inv-1">
                    <Option value="inv-1">Owned and Operated</Option>
                    <Option value="inv-2">Just cool</Option>
                </Select>
            </Form.Item>
            <Form.Item label={'Reporting start date'}>
                <DatePicker />
            </Form.Item>
            <Form.Item label={'Access to demand report'}>
                <Switch />
            </Form.Item>
            {typeof publisherData !== 'undefined' && typeof publisherData.sapid !== 'undefined' && <Form.Item label={'Company name'}>
                <Input
                    disabled
                    value={publisherData.status || 'Active'}
                />
            </Form.Item>}

            <Divider />


            {blockBase && <Form.Item label={'Company name'}>
                <Input
                    disabled
                    value={publisherData.sapid}
                />
            </Form.Item>}
            <Form.Item label={'Company name'}>
                <Input
                    disabled={blockBase}
                    value={publisherData.name}
                    onChange={getOnFieldChange('name')}
                />
            </Form.Item>
            <Form.Item label={'Contact person'}>
                <Input
                    disabled={blockBase}
                    value={publisherData.contactperson}
                    onChange={getOnFieldChange('contactperson')}
                />
            </Form.Item>
            <Form.Item label={'Street Address'}>
                <Input
                    disabled={blockBase}
                    value={publisherData.streetAdress}
                    onChange={getOnFieldChange('streetAdress')}
                />
            </Form.Item>
            <Form.Item label={'Zip Code'}>
                <Input
                    disabled={blockBase}
                    value={publisherData.zip}
                    onChange={getOnFieldChange('zip')}
                />
            </Form.Item>
            <Form.Item label={'City'}>
                <Input
                    disabled={blockBase}
                    value={publisherData.city}
                    onChange={getOnFieldChange('city')}
                />
            </Form.Item>
            <Form.Item label={'Country'}>
                <Input
                    disabled={blockBase}
                    value={publisherData.copuntry}
                    onChange={getOnFieldChange('copuntry')}
                />
            </Form.Item>
            <Form.Item label={'Accounting | E-Mail'}>
                <Input
                    disabled={blockBase}
                    value={publisherData.accemail}
                    onChange={getOnFieldChange('accemail')}
                />
            </Form.Item>
            <Form.Item label={'Accounting | Phone'}>
                <Input
                    disabled={blockBase}
                    value={publisherData.accphone}
                    onChange={getOnFieldChange('accphone')}
                />
            </Form.Item>
            <Form.Item label={'Contact Person |  E-Mail'}>
                <Input
                    disabled={blockBase}
                    value={publisherData.cpemail}
                    onChange={getOnFieldChange('cpemail')}
                />
            </Form.Item>
            <Form.Item label={'Contact Person |  Phone'}>
                <Input
                    disabled={blockBase}
                    value={publisherData.cpphone}
                    onChange={getOnFieldChange('cpphone')}
                />
            </Form.Item>
            <Form.Item label={'Bank'}>
                <Input
                    disabled={blockBase}
                    value={publisherData.bank}
                    onChange={getOnFieldChange('bank')}
                />
            </Form.Item>
            <Form.Item label={'Bank Details'}>
                <Input
                    disabled={blockBase}
                    value={publisherData.bdetails}
                    onChange={getOnFieldChange('bdetails')}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" onClick={blockBase ? null : onSubmitClick}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
