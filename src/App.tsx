import * as S from './styled'
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Tools from './pages/Tools';
import Portfolio from './pages/Portfolio';
import Contact from "./pages/Contact";

export default function App() {
  return(
     <S.Container>
       <S.Content>
         <Home />
         <About />
         <Skills />
         <Tools />
         <Portfolio />
         <Contact />
       </S.Content>
     </S.Container>
  )
}