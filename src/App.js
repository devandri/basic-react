import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Bag from './components/Bag';
import Apples from './components/Apples';
import Pears from './components/Pears';
import Trunk from './components/Trunk';
import Promo from './components/Promo';

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
      <Promo heading="Don't miss this deal!" promoSubHeading="Subscribe to my newsletter and get all the shop items at 50% off!" />
    </div>
  )
}

export default App;
