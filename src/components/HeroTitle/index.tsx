import { useTranslation } from "react-i18next";
import * as S from "./styled";

export type HeroTitleProps = {
  HeroOptions: {
    subText: string;
    title: string;
    text: string;
    icon?: JSX.Element;
  };
};

const HeroTitle = ({ HeroOptions }: HeroTitleProps) => {
  const { t } = useTranslation();
  return (
    <S.Container>
      <S.SpanContainer>
        {HeroOptions.icon}
        <S.SubText>{t(HeroOptions.subText)}</S.SubText>
      </S.SpanContainer>
      <S.Title>{t(HeroOptions.title)}</S.Title>
      <S.Text>{t(HeroOptions.text)}</S.Text>
    </S.Container>
  );
};

export default HeroTitle;
