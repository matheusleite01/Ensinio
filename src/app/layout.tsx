"use client";
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import GlobalStyles from "@/styles/global";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import store from "@/redux/configureStore";
import Footer from "@/components/Footer";
import '@/utils/i18n';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>
            <Provider store={store}>
              <GlobalStyles />
              <Header />
              <main>{children}</main>
              <Footer/>
            </Provider>
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
