import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles.js";
import Hero from "./components/Hero/index.js";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  );
}

export default App;
