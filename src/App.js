import Header from "./components/Header/index";
import Drawer from "./components/Drawer/index";
import Home from "./pages/Home/index";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Drawer />
        <Home />
      </div>
    </div>
  );
}

export default App;
