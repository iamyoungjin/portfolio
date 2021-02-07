import styled from 'styled-components';
import { Component } from 'react';
import Menubar from './hoc/Menu/Menubar'
import Page from './hoc/Page/Page'
//import Menu from './components/menu/menu'


class App extends Component{
  state = {
    page: 0
  };
  
  showPage =(no)=>{
    //alert(no);
    this.setState({page:no});
  };


  render() {
    return (
      <div>
        <Menubar showPage={this.showPage}/>
        <Page page={this.state.page}/>
      </div>
    );
  }
}
export default App;
