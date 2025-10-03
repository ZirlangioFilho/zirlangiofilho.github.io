import Title from '../../components/Title'
import * as S from './styled'

import OpenCode from '../../assets/icon-open-code.svg'
import BlockTools from '../../components/BlockTools'
import IconReact from '../../assets/react.svg'
import IconTypescript from '../../assets/typescript.svg'
import IconFigma from '../../assets/figma.svg'
import IconTailwind from '../../assets/tailwind.svg'

export default function Tools() {
    return(
        <S.Container id='Tools'>
            <Title title='Ferramentas' icon={OpenCode}/>

            <S.AreaBlock>
                <BlockTools icon={IconReact} name='React'/>
                <BlockTools icon={IconReact} name='React Native'/>
                <BlockTools icon={IconTypescript} name='Typescript'/>
                <BlockTools icon={IconFigma} name='Figma'/>
                <BlockTools icon={IconTailwind} name='Tailwid CSS'/>
            </S.AreaBlock>
        </S.Container>
    )
}