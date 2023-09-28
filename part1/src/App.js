import './App.css';
import Mensaje from "./Mensaje";

function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='Trabajando para mejorar'></Mensaje>
      <Mensaje color='blue' message='Y poder tener mi propia web'></Mensaje>
      <Mensaje color='green' message='Para vender mis propios servicios'></Mensaje>

    </div>
  );
}

export default App;
