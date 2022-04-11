import { Router } from "./frontend/routes/Router";
import { Navbar, Footer } from "./frontend/components/index";
import "./frontend/css/style.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
