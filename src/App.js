import './App.css';
import Flowchart from './components/FLowchart/Flowchart';
import Homepage from './components/HomePage/Homepage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Flowchart />
    </div>
  );
}

export default App;
