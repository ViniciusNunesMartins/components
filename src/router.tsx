import { FC } from "react";
import { ThemeProvider, DefaultTheme } from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home";
import Loading from "./pages/loadings";
import Buttons from "./pages/buttons";
import Nav from "./components/nav";
import Footer from "./components/footer";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePersistedState from "./hooks/use-persisted-state";


const Router: FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  return (
    <ThemeProvider theme={dark}>
      <BrowserRouter>
        <Nav toggleTheme={toggleTheme}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loadings" element={<Loading />} />
          <Route path="/buttons" element={<Buttons />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};


export default Router;