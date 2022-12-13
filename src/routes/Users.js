import { Route, Routes } from "react-router-dom";
import Users from "../pages/Users";

function General() {
  
    return (
      <>
      <Routes>
        <Route exact path="/users"
        element={
          <Users />
        }
        />
      </Routes>
      </>
    );
  }
  
  export default General;