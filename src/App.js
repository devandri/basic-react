import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Bag from './components/Bag';
import Apples from './components/Apples';
import Pears from './components/Pears';
import Trunk from './components/Trunk';
import Promo from './components/Promo';
import Nav from './components/Nav';
import Card from './components/Card';
import ClickExample from './components/ClickExample';
import ModeToggler from './components/ModeToggler';
import DynamicEvent from './components/DynamicEvent';
import Promo2 from './components/Promo2';
import Dog from './components/ParentChild';

const bool = true
const str1 = "Just"
const randNum = () => Math.floor(Math.random() * 100) + 1;

function Example(props) {
  return (
    <div>
      <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
      <p>The value of the math prop is: <em>{props.math}</em></p>
      <p>The vaue of the str prop is: <em>{props.str}</em></p>
    </div>
    
  )
}

function Header() {
  return (<h1>
    Hello world!
  </h1>)
}

function PracticeComponentProperties() {
  return (
    <div>
      <Heading name='Andri'/>
      <Heading name='Wibowo'/>
      <Example 
        toggleBoolean={!bool} 
        math={(10+20)/3}
        str={str1 + ' another ' + 'string'}
      />
      <Nav first="Home" />
      <Nav second="Contact" />
      <Nav third="Portofolio" />
      <Nav fourth="About" />
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

function MultipleComponent() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      <Card num={randNum()} />
      <Card num={randNum()} />
      <Card num={randNum()} />
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      {/* <PracticeComponentProperties /> */}
      {/* <MultipleComponent /> */}
      {/* <ClickExample /> */}
      <ModeToggler />
      {/* <DynamicEvent /> */}
      {/* <Promo2 /> */}
      {/* <Dog /> */}
    </div>
  )
}

export default App;
