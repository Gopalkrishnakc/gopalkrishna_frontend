
import './App.css';
import Table from './components/Table.jsx';
import Welcome from './components/Welcome.jsx';
import Heading from'./components/Heading.jsx';
import Counter from './components/Counter.jsx';
import Dynamic from './components/Dynamic.jsx';
import  DynamicContent from './components/DynamicContent.jsx';
import  Toggle from './components/Toggle.jsx';
import Parent from './components/Parent.jsx';
function App() {
  let name="ullas";
let age=25;
// let marks=52;
 return(

  <div>
    <h1>hello learner</h1>
    <Heading />
   <Table/>
<Welcome name={name} age={age}/>
<Counter/>
<Dynamic isLogged={true}/>
<DynamicContent isLogged={false}></DynamicContent>
<Toggle/>

<Parent />



  </div>


 )
}

export default App;
