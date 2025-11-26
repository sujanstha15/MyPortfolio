import{BroswerRouter, Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  

  return (
    <>
    <BorswerRouter>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BorswerRouter>
      
    </>
  )
}

export default App
