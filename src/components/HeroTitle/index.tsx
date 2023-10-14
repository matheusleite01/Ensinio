import * as S from './styled';

export type HeroTitleProps = {
  HeroOptions: {
    subText: String;
    title: String;
    text: String;
    icon?: JSX.Element;
  };
};

const HeroTitle = ({ HeroOptions }: HeroTitleProps) => {
  return (
    <S.Container>
      <S.SpanContainer>
        {HeroOptions.icon}
        <S.SubText>{HeroOptions.subText}</S.SubText>
      </S.SpanContainer>
      <S.Title>{HeroOptions.title}</S.Title>
      <S.Text>{HeroOptions.text}</S.Text>
    </S.Container>
  );
};

export default HeroTitle;
