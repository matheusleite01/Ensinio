import { useTranslation } from "react-i18next";
import { Container, Text, Title } from "./styled";

type SideContentProps = {
  text: string;
  title: string;
};

const SideContent = ({ text, title }: SideContentProps) => {
  const {t} = useTranslation();
  return (
    <Container>
      <Text>{t(text)}</Text>
      <Title>{t(title)}</Title>
    </Container>
  );
};

export default SideContent;
