import Header from '../../components/Header'
import * as S from './styled'
import Julio from "../../assets/foto-julio.svg"

import Github from '../../assets/white-github.svg'
import Instagram from '../../assets/instagram.svg'
import Linkedin from '../../assets/linkedin.svg'

export default function Home() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <S.Container>
            <Header />
            <S.Content>
                <S.ResponsiveArea>
                    <S.DivIcon>
                        <S.Link href='https://github.com/ZirlangioFilho' target='blank'><S.Icon src={Github}/></S.Link>
                        <S.Link href='https://www.instagram.com/zirlangio_filho/' target='blank'><S.Icon src={Instagram}/></S.Link>
                        <S.Link href='https://www.linkedin.com/in/zirlangiofilho/' target='blank'><S.Icon src={Linkedin}/></S.Link>
                    </S.DivIcon>

                    <S.AreaText>
                        <S.AreaTitle>
                            <S.Span>Desenvolvedor Front-end e Mobile</S.Span>
                            <S.Name data-text="Zirlangio Filho">Zirlangio Filho</S.Name>
                        </S.AreaTitle>
                        <S.Span>Criando interfaces modernas e responsivas com React e React Native. Focado em entregar experiências de usuário fluídas e inovadoras, de usuário fluídas e inovadoras..</S.Span>
                        <S.Button onClick={() => scrollToSection('About')}>
                            <S.ButtonText>
                                Saiba mais
                            </S.ButtonText>
                        </S.Button>
                    </S.AreaText>
                </S.ResponsiveArea>

                <S.DivImgResponsive>
                    <S.AreaImg>
                        <S.Img src={Julio} />
                    </S.AreaImg>
                    <S.ButtonResponsive onClick={() => scrollToSection('About')}>
                        <S.ButtonTextResponsive>
                            Saiba mais
                        </S.ButtonTextResponsive>
                    </S.ButtonResponsive>
                </S.DivImgResponsive>
            </S.Content>
        </S.Container>
    );
}