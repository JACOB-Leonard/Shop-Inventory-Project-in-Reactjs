import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Popup
import AddProduct from './components/funcComponents';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the store !!</h1>
        <AddProduct/>
      </header>
    </div>
  );
}

export default App;
