import Container from "./components/container";
import filterReducer from "./reducers/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./App.css";

let store = createStore(filterReducer);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
