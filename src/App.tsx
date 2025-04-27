import * as S from './styled'
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

export default function App() {
  return(
     <S.Container>
       <S.Content>
         <Home />
         <About />
         <Skills />
         <Contact />
       </S.Content>
     </S.Container>
  )
}