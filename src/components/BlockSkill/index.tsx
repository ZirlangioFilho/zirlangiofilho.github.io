import * as S from './styled'

type BlockProps = {
    icon: string;
    subTitle: string;
    description: string;
    delay: number,
}

export default function BlockSkill({icon, subTitle, description, delay}: BlockProps) {
    return (
     <S.Container delay={delay}>
        <S.Icon src={icon}/>
        <S.SubTitle>{subTitle}</S.SubTitle>
        <S.Description>{description}</S.Description>
     </S.Container>
    )
  }
