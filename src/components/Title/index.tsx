import * as S from "./styled"

type Tilteprops = {
    title: string;
    icon: string;
}

export default function Title({title, icon}: Tilteprops) {
  return (
   <S.Container>
    <S.Title>{title}</S.Title>
    <S.Img src={icon}/>
   </S.Container>
  )
}