import './App.css';
import Message from './components/Message.jsx'
import logo from './logo512.png';

function App(props) {
  return (
    <div>
      <header className='App-header'>
      <img src={logo} className="App-logo" alt="logo" />
        Welcome!
        <Message message = {props.message}/>
      </header>
    </div>
  );

}

export default App;
