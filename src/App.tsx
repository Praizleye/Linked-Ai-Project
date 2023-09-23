import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { GlobalStyles } from "./styles/Globals";
import { Navbar } from "./components/index";
import { ContactPage, HomePage, RegisterPage } from "./pages/index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyles />
          <Navbar />

          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<ContactPage />} path="/contact" />
            <Route element={<RegisterPage />} path="/register" />
          </Routes>

          {/* <HomePage /> */}
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
