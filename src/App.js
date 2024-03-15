import './App.css'
import Middle from './Components/Middle/Middle';
import Sidebar from './Components/Sidebar/Sidebar';
import RightNav from './Components/RightNav/RightNav';



function App() {
  return (
    <div className="App">
       <div className='AppGlass'>
       <Sidebar/>
       <Middle/>
       <RightNav/>
       </div>
    </div>
  );
}

export default App;
