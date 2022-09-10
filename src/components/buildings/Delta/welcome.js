import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";

export default function DeltaWelcome() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        direction="row"
        alignItems="center"
        style={{
          height: "100vh",
        }}
      >
        <Grid
          item
          md={12}
          xs={12}
          sm={12}
          lg={12}
          style={{
            backgroundColor: "",
            marginTop: "5vh",
          }}
        >
          <Typography
            variant="h3"
            display="block"
            style={{ fontWeight: "bold" }}
          >
            {" "}
            Which floor?
          </Typography>
        </Grid>

        <Grid container direction="row">
          <Grid
            item
            md={6}
            xs={12}
            sm={12}
            lg={6}
            style={{
              marginTop: "2vh",
              padding: "20px",
            }}
          >
            <Paper
              elevation={24}
              style={{
                height: "20vh",
                backgroundColor: "#69BE28",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                style={{
                  marginTop: "8vh",
                  fontWeight: "bold",
                  color: "#EFEFEF",
                  fontStyle: "Monospace",
                }}
              >
                First Floor
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sm={12}
            lg={6}
            style={{
              marginTop: "3vh",
              padding: "20px",
            }}
          >
            <Paper
              elevation={24}
              style={{
                height: "20vh",
                backgroundColor: "#69BE28",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                style={{
                  marginTop: "8vh",
                  fontWeight: "bold",
                  color: "#EFEFEF",
                  fontStyle: "Monospace",
                }}
              >
                Second Floor
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
