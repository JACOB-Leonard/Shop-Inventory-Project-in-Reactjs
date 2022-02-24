import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Popup
import AddProduct from './components/funcComponents';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Title'>
        <img src={".shop/public/logo192.png"} alt="Logo" />;
        <h1>Welcome to the store !</h1>
        </div>
      </header>
      <AddProduct/>
    </div>
  );
}

export default App;
