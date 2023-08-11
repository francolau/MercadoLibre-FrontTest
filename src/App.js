import {React} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ItemsResults from "./components/itemsResult/ItemsResults";
import Index from "./layout/Index.js";
import ItemsDescriptions from "./components/itemsDescription/ItemsDescription";

function App() {

  return (
    <Router>
      <Index>
        <Routes>
          <Route path='/' element={''}/>
          <Route path={`/items`} element={<ItemsResults/>} />
          <Route path={`/items/:id`} element={<ItemsDescriptions />} />
        </Routes>
      </Index>
    </Router>
  );
}

export default App;
