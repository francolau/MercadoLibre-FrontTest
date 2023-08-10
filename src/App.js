import {React} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ItemsResults from "./components/ItemsResults";
import Index from "./layout/Index.js";

function App() {

  return (
    <Router>
      <Index>
        <Routes>
          <Route path='/' element={''}/>
          <Route path={`/items`} element={<ItemsResults/>} />
        </Routes>
      </Index>
    </Router>
  );
}

export default App;
