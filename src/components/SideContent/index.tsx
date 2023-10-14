import { Container, Text, Title } from "./styled";

type SideContentProps = {
  text: String;
  title: String;
};

const SideContent = ({ text, title }: SideContentProps) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Title>{title}</Title>
    </Container>
  );
};

export default SideContent;
