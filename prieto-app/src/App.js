import 'bootstrap/dist/css/bootstrap.min.css';
import EsteComponente from './components/Container/itemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <EsteComponente unaPropsComun="tiene una props" /> 
    </div>
  );
}
export default App;
