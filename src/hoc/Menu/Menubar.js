import React from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';

const Menu = styled.div`
    position: fixed;
    display : flex;
    justify-content:space-between;
    bottom : 0;
    width: 560px;
    background-color : #efefef;
    height: 120px;  
    left : 50%;
    transform: translateX(-50%);
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding : 15px 30px;
    padding-bottom:10px;
`;
class Menubar extends React.Component{
    menues = [
        {
            icon:'user',
            color:'black',
            text:'Intro'
        },
        {
            icon:'react',
            color:'#5CD3F3',
            text:'ReactJS'
        },
        {
            icon:'docker',
            color:'#316EE6',
            text:'Docker&k8s'
        },
        {
            icon:'python',
            color:'#F6CF36',
            text:'skill'
        }
    ];

    renderMenues =(arr)=>{
        return arr.map((a,index)=>{
            return <MenuButton 
                    index={index}
                    showPage={this.props.showPage}
                    key={index} 
                    icon={a.icon} 
                    color={a.color} 
                    text={a.text}/>
        });
    }

    render(){
        return (
            <Menu>
                {/* <MenuButton icon="user" color="black" text="intro"/>
                <MenuButton icon="react" color="#5CD3F3" text="ReactJs"/>
                <MenuButton icon="docker" color="#316EE6" text="Docker&k8s"/>
                <MenuButton icon="coffee" color="#DE6800" text="Java"/> */}
                {this.renderMenues(this.menues)}
            </Menu>
        );
    }
}
export default Menubar;