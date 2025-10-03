import * as S from './styled'

type BlockToolsPros = {
    icon: string,
    name: string
}

export default function BlockTools({icon, name}:BlockToolsPros){
    return(
        <S.Container>
            <S.Icon src={icon}/>
            <S.Name>{name}</S.Name>
        </S.Container>
    )
}