import { Provider } from "react-redux";
import store from "./store";
import Students from "./views/pages/Students";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Students />
      </Provider>
    </div>
  );
}

export default App;
