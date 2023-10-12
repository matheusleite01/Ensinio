'use client'
import StyledComponentsRegistry from "@/lib/registry";
import {ThemeProvider} from "styled-components"
import { theme } from "@/styles/theme";
import GlobalStyles from "@/styles/global";

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
            <GlobalStyles/>
            {children}
            </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
