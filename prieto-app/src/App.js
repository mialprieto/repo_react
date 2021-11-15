import 'bootstrap/dist/css/bootstrap.min.css';
import itemListContainer from './components/Container/itemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <itemListContainer />
    </div>
  );
}

export default App;
