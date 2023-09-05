import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/Navbar/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/Navbar/ItemListContainer/ItemListContainer"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="app">
    <BrowserRouter >
    <Navbar />
        <Routes>
            <Route path= '/' element={<ItemListContainer />}/>
            <Route path= '/category/:categoryId' element={<ItemListContainer />}/>
            <Route path= '/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
    </BrowserRouter>
    </div>
    
  )
}
export default App
