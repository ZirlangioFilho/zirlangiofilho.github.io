import BlockSkill from '../../components/BlockSkill'
import Title from '../../components/Title'
import * as S from './styled';

import Github from "../../assets/github.svg";
import MobileDesign from "../../assets/mobile-design.svg";
import WebDesign from "../../assets/web-design.svg";
import WebDev from "../../assets/web-dev.svg";
import MobileDev from "../../assets/mobile-dev.svg";

import TechTop from '../../assets/tech-top.svg'
import TechBottom from '../../assets/tech-Bottom.svg'

export default function Skills() {
    return (
        <S.Container id="Skills">
            <Title title='Habilidades' icon={TechTop}/>

            <S.AreaBlock>
                <BlockSkill
                    icon={Github}
                    subTitle="Git version control"
                    description="Experiência em controle de versionamento utilizando Git e GitHub."
                    delay={1}
                />

                <BlockSkill
                    icon={MobileDesign}
                    subTitle="Mobile UI Design"
                    description="Criação de interfaces intuitivas e responsivas para aplicativos mobile."
                    delay={2}
                />

                <BlockSkill
                    icon={WebDesign}
                    subTitle="Web UI Design"
                    description="Design de páginas web modernas com foco em usabilidade e experiência do usuário."
                    delay={3}
                />

                <BlockSkill
                    icon={WebDev}
                    subTitle="Web Development"
                    description="Desenvolvimento de aplicações web com boas práticas e foco em performance."
                    delay={4}
                />

                <BlockSkill
                    icon={MobileDev}
                    subTitle="Mobile Development"
                    description="Criação de aplicativos móveis nativos e híbridos com foco em performance e experiência."
                    delay={5}
                />

            </S.AreaBlock>

            <S.AreaTechBottom>
                <S.TechBottom src={TechBottom}/>
            </S.AreaTechBottom>
        </S.Container>
    )
}