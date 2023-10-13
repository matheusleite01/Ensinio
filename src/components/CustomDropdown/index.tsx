import * as S from './styled';

type DropdownProps = {
  title: string;
  options: {
    text: string;
    subText: string;
    icon: JSX.Element;
  }[];
};

const CustomDropDown = ({ title, options }: DropdownProps) => {

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.List>
        {options.map(({text, subText, icon}) => 
        <S.ListItem key={text}>
          {icon}
          <div>
            <S.Text>{text}</S.Text>
            <S.SubText>{subText}</S.SubText>
          </div>
        </S.ListItem>)}
      </S.List>
    </S.Container>
  );
};

export default CustomDropDown;
