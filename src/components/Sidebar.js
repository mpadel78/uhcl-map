import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Sidebar({ handleClick }) {
  return (
    <div style={{ marginTop: "20px" }}>
      {/*
      <li style={{ margin: "2vh" }}>Arbor</li>
      <li style={{ margin: "2vh" }}>Bayou</li>
      <li style={{ margin: "2vh" }}>Delta</li>
      <li style={{ margin: "2vh" }}>HealthCenter</li>
      <li style={{ margin: "2vh" }}>HunterHall</li>
      <li style={{ margin: "2vh" }}>Pearland</li>
      <li style={{ margin: "2vh" }}>REC</li>
      <li style={{ margin: "2vh" }}>SSCB</li>
      <li style={{ margin: "2vh" }}>STEM</li>


      //This -> we are not worrying about at the moment since we are only building POC now so lets focus on only second floor of Delta Building
      */}

      <FormControl fullWidth style={{ backgroundColor: "white" }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Room"
          //onChange={handleChange}
        >
          <MenuItem
            onClick={(event) => handleClick(event.target.innerText)}
            value={10}
          >
            201
          </MenuItem>
          <MenuItem
            onClick={(event) => handleClick(event.target.innerText)}
            value={20}
          >
            202
          </MenuItem>
          <MenuItem
            onClick={(event) => handleClick(event.target.innerText)}
            value={30}
          >
            203
          </MenuItem>
          <MenuItem
            onClick={(event) => handleClick(event.target.innerText)}
            value={30}
          >
            204
          </MenuItem>
          <MenuItem
            onClick={(event) => handleClick(event.target.innerText)}
            value={30}
          >
            205
          </MenuItem>
          <MenuItem
            onClick={(event) => handleClick(event.target.innerText)}
            value={30}
          >
            205A
          </MenuItem>
          <MenuItem
            onClick={(event) => handleClick(event.target.innerText)}
            value={30}
          >
            205B
          </MenuItem>
          <MenuItem
            onClick={(event) => handleClick(event.target.innerText)}
            value={30}
          >
            208-2012
          </MenuItem>
          <MenuItem
            onClick={(event) => handleClick(event.target.innerText)}
            value={30}
          >
            213
          </MenuItem>
          <MenuItem
            onClick={(event) => handleClick(event.target.innerText)}
            value={30}
          >
            214
          </MenuItem>
          <MenuItem
            onClick={(event) => handleClick(event.target.innerText)}
            value={30}
          >
            Restroom
          </MenuItem>
          <MenuItem
            onClick={(event) => handleClick(event.target.innerText)}
            value={30}
          >
            220-232/235/236/238
          </MenuItem>
          <MenuItem
            onClick={(event) => handleClick(event.target.innerText)}
            value={30}
          >
            238
          </MenuItem>
          <MenuItem
            onClick={(event) => handleClick(event.target.innerText)}
            value={30}
          >
            240
          </MenuItem>
          <MenuItem
            onClick={(event) => handleClick(event.target.innerText)}
            value={30}
          >
            241
          </MenuItem>
          <MenuItem
            onClick={(event) => handleClick(event.target.innerText)}
            value={30}
          >
            242
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
