import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Bag from './components/Bag';
import Apples from './components/Apples';
import Pears from './components/Pears';
import Trunk from './components/Trunk';

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
      <Bag>
        <Apples color="yellow" number="5" />
      </Bag>
      <Bag>
        <Pears friend="Peter" />
      </Bag>
      <Trunk>
        <Bag>
          <Pears friend="John Doe" />
        </Bag>
      </Trunk>
    </div>
  )
}

export default App;
