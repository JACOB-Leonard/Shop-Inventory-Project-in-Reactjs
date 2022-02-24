import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/funcComponents';
import logo from './logo.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Title'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the store !</h1>
        </div>
      </header>
      <AddProduct/>
    </div>
  );
}

export default App;
