import logo from './logo.svg';
import './App.css';
import Heading from './Heading';

function Header() {
  return (<h1>
    Hello world!
  </h1>)
}

function App() {
  return (
    <div className='App'>
      <Heading name='Andri'/>
      <Heading name='Wibowo'/>
    </div>
  )
}

export default App;
