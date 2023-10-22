# Ensinio

![App Screenshot](public/readme.png)

#### Acesse o projeto aqui -> [Ensinio](https://ensinio-ten.vercel.app/) 


<br>

# 📋 Sobre

O projeto em questão envolve o desenvolvimento de uma aplicação destinada a crescer e ganhar escala, com o propósito de destacar e promover os serviços e produtos da Ensínio. Essa aplicação terá como requisito essencial a responsividade, ou seja, a capacidade de se adaptar de maneira eficaz a uma variedade de dispositivos, garantindo assim uma experiência de usuário consistente e satisfatória.  A aplicação será capaz de realizar requisições a uma API, permitindo a obtenção de dados em tempo real ou atualizações de informações relacionadas aos serviços e produtos da Ensínio. Também será implementada a internacionalização (i18n), tornando possível a adaptação da aplicação para diferentes idiomas e culturas, de forma a atender a um público global de maneira eficaz e inclusiva. Portanto, a aplicação não apenas oferecerá uma experiência de usuário atrativa e intuitiva, mas também será altamente funcional, dinâmica e inclusiva, atendendo às necessidades de um público diversificado

<br>


# 🛠   Tecnologias Usadas
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/pt/) [![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/pt-BR/) ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
[![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

<br>

# 🔮   Funcionalidades:

✅ Requisição de API 

✅ Internacionalização (i18n)

✅ Design e Usabilidade

✅ Responsividade

<br>

<br>



# 🔧 Entendendo decisões arquiteturais e a estrutura do projeto

### Setup de ambiente:

- [Node](https://nodejs.org/en)


### Como rodar na minha máquina?

- Clone o projeto  `git clone https://github.com/matheusleite01/Ensinio.git`
- Rode `npm install`
- Rode `npm run dev`
- Pronto 🎉



### Estrutura do projeto

- `./App`: É a página que o Next.js usa para montar o sistema de roteamento
- `./src/__tests__`:  Contém os arquivos de testes unitários para verificar o funcionamento correto do código da aplicação.
- `./src/components`: São todos os pedaços primordiais de interface como componentes 
- `./src/components/hooks`: Pasta que armazena toda a logica do componente, seguindo o Princípio da responsabilidade única do SOLID
- `./src/redux`: Contém os arquivos relacionados ao Redux, como reducers, actions e store, para controlar o estado da aplicação de forma eficiente.
- `./src/lib`: Contém funcionalidades genéricas que podem ser usadas em toda a aplicação, facilitando a manutenção e a organização do código.
- `./src/Hooks`: Armazeno todos os Custom Hooks
- `./src/style`: Estilos globais do projeto e variaveis de estilos
- `./src/utils`: Armazena a parte de i18n (internacionalização)

### Como me localizar no projeto?

  - Todos os `componentes` que representam as páginas estão em `./src/components`
    - Uma vez dentro de uma página você pode ir navegando pelos componentes para ir se encontrando e fazer a alteração que deseja

### Como funciona a parte de i18n (internacionalização)?

- Todo conteúdo multi-língua é alterado por meio da pasta `src/utils/i18n`
  - Para acessar um conteúdo dentro do código siga o exemplo abaixo:

```js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import pt from "./pt.json";
import es from "./es.json";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "pt",
  resources: {
    en: en,
    pt: pt,
    es: es,
  }, 
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
```
<br>

# 📝  Storybook

### O que e ? 
O Storybook é uma ferramenta poderosa e versátil usada no desenvolvimento de interfaces de usuário (UI) e componentes em diversos projetos de software. Ele serve como um ambiente de desenvolvimento isolado, onde você pode criar, visualizar e testar seus componentes de maneira interativa.

### Para que serve ?
O Storybook desempenha um papel fundamental ao permitir que os desenvolvedores criem e documentem componentes de forma isolada, tornando mais fácil a construção de interfaces de alta qualidade e a colaboração em equipes de desenvolvimento. Ele é especialmente útil para designers e desenvolvedores trabalharem juntos, garantindo que os componentes funcionem conforme o esperado, antes de serem integrados ao aplicativo principal.

### Como rodar na minha máquina?

Depois de clonar e instalar o projeto

- Rode `npm run storybook`
- Pronto 🎉







