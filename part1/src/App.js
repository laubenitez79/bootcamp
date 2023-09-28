import './App.css';
import Mensaje from "./Mensaje";

function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='Trabajando para mejorar'></Mensaje>
      <Mensaje color='blue' message='Y'></Mensaje>
      <Mensaje color='green' message='Poder tener mi propia web'></Mensaje>

    </div>
  );
}

export default App;
