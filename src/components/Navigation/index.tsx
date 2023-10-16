import { Container, ListItens, DropContainer } from "./styled";
import Link from "next/link";
import Polygon from "../../../public/assets/icons/Polygon-icon";
import CustomDropDown from "../CustomDropdown";
import EadIcon from "../../../public/assets/icons/ead-icon";
import IconSocial from "../../../public/assets/icons/icon-social";
import IconGamification from "../../../public/assets/icons/icon-gamification";
import IconApp from "../../../public/assets/icons/icon-app";
import useNavigation from "./hooks/useNavigation";

type NavigationProps = {
  links: {
    name: string;
    path: string;
  }[];
};

const options = [
  {
    text: "Crie uma Escola Online",
    subText: "Lorem ipsum dolor sit amet",
    icon: <EadIcon />,
  },
  {
    text: "Comunidade e rede social",
    subText: "Lorem ipsum dolor sit amet",
    icon: <IconSocial />,
  },
  {
    text: "Gamificação",
    subText: "Lorem ipsum dolor sit amet",
    icon: <IconGamification />,
  },
  {
    text: "Aplicativo mobile",
    subText: "Lorem ipsum dolor sit amet",
    icon: <IconApp />,
  },
];

const Navigation = ({ links }: NavigationProps) => {
  const { isOpenDropdown, setIsOpenDropdown, t } = useNavigation();

  return (
    <nav>
      <Container>
        <DropContainer>
          <ListItens onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
            {t("Soluções")} <Polygon />
          </ListItens>
          {isOpenDropdown && (
            <CustomDropDown title="SOLUÇÕES PRINCIPAIS" options={options} callback={setIsOpenDropdown} />
          )}
        </DropContainer>
        {links.map(({ name, path }) => (
          <ListItens key={name}>
            <Link href={/*path*/ "#"}>{t(name)}</Link>
          </ListItens>
        ))}
      </Container>
    </nav>
  );
};

export default Navigation;
