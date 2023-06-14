
import './App.css';
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password"/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
