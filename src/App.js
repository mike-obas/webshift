import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./utils/theme";
import { BrowserRouter as Router } from "react-router-dom";
import General from "./routes/General";
import Users from "./routes/Users";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
       <General />
       <Users />
      </Router>
    </ThemeProvider>
  );
}

export default App;
