import "./App.css";

import Home from "./pages/home/Home";

import { DataContextProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Home />
      </DataContextProvider>
    </div>
  );
}

export default App;
