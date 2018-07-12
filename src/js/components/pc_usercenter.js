/**
 * Created by luoxinyi on 2017/8/9.
 */
import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {Row, Col, Menu, Icon, Tabs, Form, message, Input, Button, Checkbox, Modal} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

export default class PCUsercenter extends React.Component{
    render() {
        return(
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">

                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">

                            </TabPane>
                            <TabPane tab="我的头像列表" key="3">

                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
            </div>
        )
    }
}