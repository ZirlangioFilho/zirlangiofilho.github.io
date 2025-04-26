import Title from '../../components/Title';
import * as S from './styled'

import Img from '../../assets/img-about.svg'
import InfoIcon from '../../assets/icon-info.svg'

export default function About() {
 return (
   <S.Container id='About'>
    <Title title='Sobre' icon={InfoIcon}/>

    <S.Content>
        <S.AreaText>
          <S.AboutText>
          Sou desenvolvedor front-end e mobile, com especialização em React e React Native, apaixonado por criar aplicações que unem desempenho, usabilidade e estética. Tenho experiência no desenvolvimento de interfaces modernas e responsivas, integração de APIs, gerenciamento de estado e adaptação de layouts para diferentes plataformas. No meu trabalho, priorizo a escrita de código limpo, escalável e de fácil manutenção, sempre com foco na melhor experiência para o usuário. Tenho familiaridade com ferramentas de design, como Figma, para garantir a fidelidade entre o protótipo e o produto final. Acredito que a tecnologia é um meio poderoso para conectar pessoas e transformar ideias em soluções práticas. Estou constantemente em busca de aprimoramento e novos desafios que me permitam crescer e contribuir de forma significativa em projetos que impactem a vida das pessoas.
          </S.AboutText>
        </S.AreaText>

        <S.AreaImg>
          <S.Img src={Img}/>
        </S.AreaImg>

    </S.Content>

   </S.Container>
 );
}