import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexBox } from '../reusuable/style'
import {Icon} from 'semantic-ui-react';

const IntroContainer = styled.div`
    position: relative;
    margin: 0 auto;
    margin-top : 40px;
    width: 620px;
    height : 420px;
    box-shadow:3px 3px 8px rgba(0,0,0,0.3);
    background-color: yello;
    .me{
        width:90%;
        height: 250px;
        margin: 0 auto;
    }
    
    .topic{
        padding: 10px;
        color: #aaa;
        font-size: 21px;
        letter-spacing: 1.0px;
    }

    .label{
        font-weight: bold;
        text-align: right;
    }
`;

const IconsBox = styled.div`
    position:absolute;
    bottom:0;
    height: 70px;
    background-color: #555;
    width: 100%;
    padding: 20px 0;
    .myicon {
        cursor: pointer;
        transition: 0.6s;
    }
    .github:hover{
        color:#302F2F !important;
    }
    .facebook:hover{
        color:#4064AC !important;
    }
    .linkedin:hover{
        color:#2464AD !important;
    }
    .youtube:hover{
        color:#ff0000 !important;
    }
    .google:hover{
        color:#AD2F20 !important;
    }
`;

class Skill extends Component {
    
    render() {
        return (
            <div>
                <IntroContainer>
                    <FlexBox>
                        <div className="flex-6" style={{paddingTop:"30px"}}>
                            <div className="topic">SKILL</div>
                            <br/>
                            <div className="flex-1" style={{padding:"25px"}}>
                                <img className="me" src={require('../../img/sky.JPG')}/>
                            </div>
                        </div>
                    </FlexBox>
                    <IconsBox>
                        <FlexBox>
                        <div className="flex-2"/>
                        <div className="flex-1">
                            <a href="www.github.com/iamyoungjin">
                          <Icon className="myicon github" name="github" size="big" style={{color:"white"}}/>
                            </a>
                        </div>
                        <div className="flex-1">
                        <Icon className="myicon facebook"name="facebook" size="big" style={{color:"white"}}/>
                        </div>
                        <div className="flex-1">
                        <Icon className="myicon linkedin"name="linkedin" size="big" style={{color:"white"}}/>
                        </div>
                        <div className="flex-1">
                        <Icon className="myicon google"name="google plus" size="big" style={{color:"white"}}/>
                        </div>
                        <div className="flex-1">
                        <Icon className="myicon youtube"name="youtube" size="big" style={{color:"white"}}/>
                        </div>
                        <div className="flex-1"/>
                        </FlexBox>
                    </IconsBox>
                </IntroContainer>
            </div>
        );
    }
}

export default Skill;