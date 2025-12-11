// src/App.js
import React from "react";
import styled from "styled-components";
import theme from "styled-theming";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import DarkThemeProvider from "./DarkThemeProvider";
import DarkThemeToggle from "./DarkThemeToggle";
import "./App.css";

// ---- theme definitions using styled-theming ----
const pageBackground = theme("theme", {
  light: "#ffffff",
  dark: "#333333",
});

const pageTextColor = theme("theme", {
  light: "#000000",
  dark: "#ffffff",
});

const headerBackground = theme("theme", {
  light: "#000000",
  dark: "#f5f5f5",
});

const headerTextColor = theme("theme", {
  light: "#ffffff",
  dark: "#000000",
});

// ---- styled components ----
const PageWrapper = styled.div`
  border: 2px solid #3b5fb8;      /* thin blue border like screenshot */
  margin: 40px auto;
  max-width: 700px;
  min-height: 450px;
`;

const SwitchTheme = styled.div`
  background-color: ${headerBackground};
  color: ${headerTextColor};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  background-color: ${pageBackground};
  color: ${pageTextColor};
  min-height: 380px;
  padding: 80px 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// ---- App component ----
const App = () => {
  return (
    <React.Fragment>
      <ReduxProvider store={store}>
        <DarkThemeProvider>
          <PageWrapper>
            <SwitchTheme>
              <h1>Theme App</h1>

              {/* checkbox to toggle theme */}
              <DarkThemeToggle />
            </SwitchTheme>

            <Container>
              <h2>Welcome!</h2>
              <h3>Full Stack Web Development</h3>
            </Container>
          </PageWrapper>
        </DarkThemeProvider>
      </ReduxProvider>
    </React.Fragment>
  );
};

export default App;
