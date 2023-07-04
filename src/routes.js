import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreMin from "./pages/SobreMin";
import Menu from "./components/Menu";
import PaginaPadrao from "components/PaginaPadrao";
import Rodape from "components/Rodape";
import Post from "components/Post";
import NaoEncontrado from "pages/NaoEncontrado";
import ScrollToTop from "components/ScrollToTop";
function AppRoutes() {
  return (
    <Router>
      <ScrollToTop/>
      <Menu/>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio />} />
          <Route path="sobremin" element={<SobreMin />} />
        </Route>
        <Route path="post/:id/*" element={<Post/>}/>
        <Route path='*' element={<NaoEncontrado/>} />
      </Routes>
      <Rodape/>
    </Router>
  );
}

export default AppRoutes;
