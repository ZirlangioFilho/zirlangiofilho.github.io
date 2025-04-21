import * as S from "./styled"

type tilteprops = {
    title: string;
}

export default function Title({title}: tilteprops) {
  return (
   <S.Container>
    {title}
   </S.Container>
  )
}