import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import App from './App';
import { createTheme } from "@mui/material";
import {store} from "./redux/store";
import {Provider} from "react-redux";

const theme = createTheme({
  // palette: {
  //   orange: {
  //       main: "#E15F00",
  //       contrastText: "#000",
  //       dark: "#7e3a00"
  //   },
  //   mode: "dark"
  // }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
        <Provider store={store}>
           <App/>
        </Provider>
    </StyledEngineProvider>
  </ThemeProvider>
);
