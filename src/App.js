import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           안녕하세요
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const Container = styled.div`
  text-align: right;
`

//stateful component
//stateless component
const MyComponent = props => {
return <h1>Welcome To my {props.text} {props.children}</h1>;
};
class App extends Component{
  render() {
    return (
      //JSX (Javascript XML)
      //text-aline:center (javascript object는 '-'이 들어갈 수 없음)
      //inline 방법 , style방법, styled-components
      <Container>
      <MyComponent text={"ABC"} />
      <div className='intro' 
        style = {{textAlign:'center',backgroundColor:"blue"}}> 
        <MyComponent text={"ABC"} />
        <MyComponent text={"haha"}>
          <h3>여기</h3>
        </MyComponent>
        iamyoungjin
      </div>
      </Container>
    );
  }
}
export default App;
