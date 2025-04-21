import BlockSkill from '../../components/BlockSkill'
import Title from '../../components/Title'
import * as S from './styled';

import Github from "../../assets/github.svg";
import MobileDesign from "../../assets/mobile-design.svg";
import WebDesign from "../../assets/web-design.svg";
import WebDev from "../../assets/web-dev.svg";
import MobileDev from "../../assets/mobile-dev.svg";

export default function Skills() {
    return (
        <S.Container id="Habilidades">
            <Title title='Habilidades' />

            <S.AreaBlock>
                <BlockSkill
                    icon={Github}
                    subTitle="Git version control"
                    description="Experiência em controle de versionamento utilizando Git e GitHub."
                />

                <BlockSkill
                    icon={MobileDesign}
                    subTitle="Mobile UI Design"
                    description="Criação de interfaces intuitivas e responsivas para aplicativos mobile."
                />

                <BlockSkill
                    icon={WebDesign}
                    subTitle="Web UI Design"
                    description="Design de páginas web modernas com foco em usabilidade e experiência do usuário."
                />

                <BlockSkill
                    icon={WebDev}
                    subTitle="Web Development"
                    description="Desenvolvimento de aplicações web com boas práticas e foco em performance."
                />

                <BlockSkill
                    icon={MobileDev}
                    subTitle="Mobile Development"
                    description="Criação de aplicativos móveis nativos e híbridos com foco em performance e experiência."
                />

            </S.AreaBlock>
        </S.Container>
    )
}