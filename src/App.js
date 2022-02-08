import { Routes, Route } from "react-router-dom";
// css
import './assets/styles/flex-box.css';
import './assets/styles/global.css';
import './assets/styles/main.css';
import Header from "./components/Header/Header";
import Order from "./components/Order/Order";
import { Dashboard } from "./pages";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Order />
    </div>
  );
}

export default App;
