import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import './styles/app.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
