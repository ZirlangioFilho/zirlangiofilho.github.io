import * as S from './styled'

type BlockProps = {
    icon: string;
    subTitle: string;
    description: string;
}

export default function BlockSkill({icon, subTitle, description}: BlockProps) {
    return (
     <S.Container>
        <S.Icon src={icon}/>
        <S.SubTitle>{subTitle}</S.SubTitle>
        <S.Description>{description}</S.Description>
     </S.Container>
    )
  }
