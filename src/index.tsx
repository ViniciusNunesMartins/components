import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './router';
import GlobalStyle from "./styles/global";


const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Router />
    <GlobalStyle />
  </StrictMode>
);
