
import './App.css';
// import ReducerComp from './Components/Reducer';
import Todos from './Components/Crudreducer';
import FetchComp from './Components/Memo';
function App() {
  return (
    <div >
      {/* <ReducerComp/> */}
 <Todos/>
      <FetchComp/>
    </div>
  );
}

export default App;
