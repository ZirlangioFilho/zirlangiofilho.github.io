import * as S from './styled'
import Img from '../../assets/julio 2.svg'
import Header from "../../components/Header";

export default function Home(){
    return(
        <S.Container>
            <Header />
            <S.AreaIntro>
                <S.Presentation>
                    <S.AreaText>
                        <S.SubTitle>Desenvolvedor Front-end e Mobile</S.SubTitle>
                        <S.Title>Zirlangio Filho</S.Title>
                        <S.AreaSpan>
                            <S.Span>Criando interfaces modernas e responsivas com React e React Native.
                                 Focado em entregar experiências de usuário fluídas e inovadoras.</S.Span>
                        </S.AreaSpan>
                    </S.AreaText>
                    <S.AreaButton>
                        <S.Button href="#Habilidades">Saiba mais</S.Button>
                     </S.AreaButton>
                </S.Presentation>
            <S.AreaImg>
                <S.Img src={Img}/>
            </S.AreaImg>

            </S.AreaIntro>
                 
        </S.Container>
    )
}