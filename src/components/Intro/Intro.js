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
    
    .job{
        color: #aaa;
        font-size: 18px;
        letter-spacing: 0.9px;
    }
    .name{
        font-size: 24px;
        font-weight: bold;
        margin-top: 5px;
        border-bottom: 1px solid black;
        padding-bottom: 10px;
        width: 90%
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

class Intro extends Component {
    
    render() {
        return (
            <div>
                <IntroContainer>
                    <FlexBox>
                        <div className="flex-4" style={{padding:"25px"}}>
                            <img className="me" src={require('../../img/sky.JPG')}/>
                        </div>
                        <div className="flex-6" style={{paddingTop:"30px"}}>
                            <div className="job">Developer</div>
                            <div className="name">Jay NA</div>
                            <br/>
                            <FlexBox style={{marginTop:"7px"}}>
                                <div className="flex-2 label">School</div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">Univ</div>
                            </FlexBox>
                            <FlexBox style={{marginTop:"7px"}}>
                                <div className="flex-2 label">Phone</div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    +1 908-111-2222
                                </div>
                            </FlexBox>
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

export default Intro;