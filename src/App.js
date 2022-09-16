import { useState } from "react";
import Welcome from "./components/welcome";
import DeltaWelcome from "./components/buildings/Delta/welcome";
import DeltaSecond from "./components/buildings/Delta/delta2nd";
import Search from "./components/buildings/Delta/Search";
import Grid from "@mui/material/Grid";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [popup, setPopup] = useState("");
  const handleAction = (hello) => {
    setPopup(hello);
    console.log(popup);
  };
  return (
    <div className="App">
      <Grid
        container
        justifyContent="center"
        direction="row"
        //alignItems="center"
      >
        <Grid
          item
          md={11}
          xs={11}
          sm={11}
          lg={11}
          style={{
            height: "100vh",
          }}
        >
          <DeltaSecond popup={popup} />
        </Grid>
        <Grid
          item
          md={1}
          xs={1}
          sm={1}
          lg={1}
          backgroundColor="#0078AE"
          style={{
            height: "100vh",
          }}
        >
          <Sidebar handleClick={handleAction} />
        </Grid>
      </Grid>
    </div>
  );
}
