import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

function General() {
  
    return (
      <>
      <Routes>
        <Route exact path="/"
        element={
          <LandingPage />
        }
        />
      </Routes>
      </>
    );
  }
  
  export default General;