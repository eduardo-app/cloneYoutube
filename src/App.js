import Header from "./components/header";
import Menu from "./components/menu";



function App() {
  return (
    <div className="App">
      <Header></Header>
      <div style={{ width: '100%', display: 'flex' }}>
        <Menu />
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
