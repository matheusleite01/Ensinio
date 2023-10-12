import { Container, ListItens } from "./styled";
import Link from "next/link";
import Polygon from "../../../public/assets/icons/Polygon-icon";

type NavigationProps = {
  links: {
    name: string;
    path: string;
  }[];
};

const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav>
      <Container>
        <ListItens>
          Soluções <Polygon />
        </ListItens>
        {links.map(({ name, path }) => (
          <ListItens key={name}>
            <Link href={/*path*/ "#"}>{name}</Link>
          </ListItens>
        ))}
      </Container>
    </nav>
  );
};

export default Navigation;
