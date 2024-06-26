"use client";
import HeroTitle from "@/components/HeroTitle";
import DevicesMobileIcon from "../../public/assets/icons/DevicesMobile-icon";
import PlayIcon from "../../public/assets/icons/Play-icon";
import * as S from "./styled";
import Button from "@/components/Button";
import Image from "next/image";
import picture from "../../public/img/menImg.png";
import SideContent from "@/components/SideContent";
import ApiResources from "@/components/ApiResources";
import { useTranslation } from "react-i18next";
import IconPlaylists from "../../public/assets/icons/icon-playlists";
import IconCertified from "../../public/assets/icons/icon-certified";
import Helmet from "react-helmet";

const HeroOptions = {
  subText: "plataforma all in one",
  title: "Sua escola online poderosa e lucrativa",
  text: "Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistema EAD completo.",
  icon: <DevicesMobileIcon />,
};

const Home = () => {
  const {t} = useTranslation();
  return (
    <>
    <Helmet>
        <title>Ensinio</title>
    </Helmet>
      <S.HeroContainer>
        <div className="container">
          <S.IconBg>
            <IconPlaylists/>
            <IconCertified/>
            <IconCertified/>
            <IconPlaylists/>
            <IconPlaylists/>
          </S.IconBg>
          <S.HeroSection>
            <div>
              <HeroTitle HeroOptions={HeroOptions} />
              <S.ButtonContainer>
                <Button backgroundColor="#00E1E7" color="#130C25" border="none">
                  {t("Começar agora")}
                </Button>
                <S.spanVideo>
                  <PlayIcon />
                  {t("Ver vídeo")}
                </S.spanVideo>
              </S.ButtonContainer>
            </div>
            <Image src={picture} alt="men" style={{ objectFit: "contain" }} />
          </S.HeroSection>
        </div>
      </S.HeroContainer>
      <S.CardContainer>
        <S.SubContentContainer>
          <SideContent
            text={"pensamos em cada detalhe"}
            title={"Queremos que o aluno se sinta confortável enquanto aprende"}
          />
          <S.SpanContent>{t("Conheça alguns dos nossos recursos")} ⚡️</S.SpanContent>
        </S.SubContentContainer>
        <ApiResources/>
      </S.CardContainer>
    </>
  );
};

export default Home;
