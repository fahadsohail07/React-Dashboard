import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TopBar from "./components/TopBar/TopBar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="container">
      <div className="aside">
        <NavBar />
      </div>
      <div className="main">
        <TopBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
