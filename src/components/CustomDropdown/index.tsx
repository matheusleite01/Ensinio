import { useTranslation } from 'react-i18next';
import * as S from './styled';
import React, { useRef } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';

type DropdownProps = {
  title: string;
  options: {
    text: string;
    subText: string;
    icon?: JSX.Element;
  }[];
  callback?:  React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomDropDown = ({ title, options, callback }: DropdownProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const {t} = useTranslation();
    useOutsideClick(ref,callback);

  return (
    <S.Container ref={ref} role='customDropdown'>
      <S.Title>{title}</S.Title>
      <S.List>
        {options.map(({text, subText, icon}) => 
        <S.ListItem key={text}>
          {icon}
          <div>
            <S.Text>{t(text)}</S.Text>
            <S.SubText>{t(subText)}</S.SubText>
          </div>
        </S.ListItem>)}
      </S.List>
    </S.Container>
  );
};

export default CustomDropDown;
