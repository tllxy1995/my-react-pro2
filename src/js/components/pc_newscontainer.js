/**
 * Created by luoxinyi on 2017/8/8.
 */
import React from 'react';
import {Row, Col, Tabs, Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block'

const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoPlay: true
        }

        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/images/carousel_1.jpg" alt="carousel_1.jpg"/></div>
                                    <div><img src="./src/images/carousel_2.jpg" alt="carousel_2.jpg"/></div>
                                    <div><img src="./src/images/carousel_3.jpg" alt="carousel_3.jpg"/></div>
                                    <div><img src="./src/images/carousel_4.jpg" alt="carousel_4.jpg"/></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条"
                                              imageWidth="112px"></PCNewsImageBlock>
                        </div>
                        <Tabs class="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="国际新闻" key="2">
                                <PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                        <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻"
                                          imageWidth="132px"></PCNewsImageBlock>
                        <PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻"
                                          imageWidth="132px"></PCNewsImageBlock>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}