import Hello from "./hello";

const username = 'ajay'

function App() {
  return (
    <div className="App">
      <Hello />
      <h1>Hello world {username}</h1>
    </div>
  );
}

export default App;
