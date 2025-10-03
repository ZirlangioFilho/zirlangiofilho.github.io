import * as S from './styled'

type BlockPortProps = {
  image: string;
  description: string;
  onClick?: () => void;
};

export default function BlockPort({ image, description, onClick }: BlockPortProps) {
  return (
    <S.Container image={image}>
      <S.Description>{description}</S.Description>
      <S.Button onClick={onClick}>
        <S.TextButton>Saiba mais</S.TextButton>
      </S.Button>
    </S.Container>
  );
}
