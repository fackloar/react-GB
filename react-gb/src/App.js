import "./App.css";
import { Route, Routes } from "react-router-dom";
import SiteLayout from "./Layouts/Layout";
import Chat from "./pages/Chat";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Counter from "./pages/Counter";

const theme = createTheme({
  spacing: [0, 4, 8, 16],
  components: {
    MuiButton: {
      defaultProps: {
        size: "big",
        variant: "contained",
        margin: "dense",
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
        size: "small",
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: 1,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
          <Route path={"/"} element={<SiteLayout />}>          
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/counter"} element={<Counter />} />
        </Route>
        <Route path={"/chat"} element={<Chat />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;