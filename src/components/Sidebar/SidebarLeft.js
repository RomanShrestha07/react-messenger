import {Avatar, Button, Card, Col, Input, Layout, List, Menu, Row, Typography} from "antd";
import {
    EllipsisOutlined, FormOutlined, SearchOutlined, UserOutlined, VideoCameraAddOutlined
} from "@ant-design/icons";
import '../../assets/css/sidebarLeft.css';

const {Sider} = Layout;
const {Title} = Typography;

const SidebarLeft = () => {
    const data = [
        {
            title: 'Jane Doe',
            description: 'What website do you visit the most?',
        },
        {
            title: 'Jack Black',
            description: 'Do you like music?',
        },
        {
            title: 'Josh Green',
            description: "Yes, I'm very interested in science."
        },
        {
            title: 'Jill Yellow',
            description: 'Ok see you later.'
        },
        {
            title: 'George Grey',
            description: "What's your favourite movie?",
        },
        {
            title: 'Harry Black',
            description: 'See ya later.'
        },
        {
            title: 'Peter Blue',
            description: "I'll do it tomorrow."
        },
    ];

    return (
        <Sider width='23%'>
            <Menu mode="inline" style={{height: '100%', borderRight: 0}}>
                <Card bordered={false} style={{borderRadius: 0}} bodyStyle={{paddingTop: 12}}>
                    <Row>
                        <Col span={12}>
                            <Row>
                                <Col span={24}>
                                    <Title level={3} strong>Chats</Title>
                                </Col>
                            </Row>
                        </Col>

                        <Col span={12}>
                            <Row>
                                <Col span={8}>
                                    <Button
                                        type="text"
                                        shape="circle"
                                        size="large"
                                        icon={<EllipsisOutlined/>}
                                        style={sidebar_buttons}
                                    />
                                </Col>

                                <Col span={8}>
                                    <Button
                                        type="text"
                                        shape="circle"
                                        size="large"
                                        icon={<VideoCameraAddOutlined/>}
                                        style={sidebar_buttons}
                                    />
                                </Col>

                                <Col span={8}>
                                    <Button
                                        type="text"
                                        shape="circle"
                                        size="large"
                                        icon={<FormOutlined/>}
                                        style={sidebar_buttons}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row style={{marginTop: 12}}>
                        <Col span={24}>
                            <Input
                                placeholder="Search Messenger"
                                prefix={<SearchOutlined/>}
                                style={{borderRadius: 20}}
                            />
                        </Col>
                    </Row>
                </Card>

                <Card bordered={false} style={{borderRadius: 0}} bodyStyle={{paddingTop: 0}}>
                    <Row>
                        <Col span={24}>
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={(item, index) => (
                                    <List.Item
                                        style={item.title === 'Jane Doe' ? selected_style : unselected_style}
                                        key={index}
                                    >
                                        <List.Item.Meta
                                            avatar={<Avatar icon={<UserOutlined/>}/>}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Col>
                    </Row>
                </Card>
            </Menu>
        </Sider>
    );
};

export default SidebarLeft;

const sidebar_buttons = {
    backgroundColor: '#e4e6eb'
};

const selected_style = {
    backgroundColor: '#eaf3ff',
    paddingLeft: 12,
    borderRadius: 10
};

const unselected_style = {
    paddingLeft: 12,
    borderRadius: 10
};