import React, { useState } from "react";
import styles from "./DataCard.module.scss";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Link,
  Divider,
} from "@material-ui/core";
import NumberFormat from "react-number-format";

const DataCard = (props) => {
  function yyyymmdd(dateInput) {
    var y = dateInput.substring(0, 4);
    var m = dateInput.substring(4, 6);
    var d = dateInput.substring(6, 8);
    return `${y}-${m}-${d}`;
  }

  const states = [
    ["Arizona", "AZ"],
    ["Alabama", "AL"],
    ["Alaska", "AK"],
    ["Arkansas", "AR"],
    ["California", "CA"],
    ["Colorado", "CO"],
    ["Connecticut", "CT"],
    ["Delaware", "DE"],
    ["Florida", "FL"],
    ["Georgia", "GA"],
    ["Hawaii", "HI"],
    ["Idaho", "ID"],
    ["Illinois", "IL"],
    ["Indiana", "IN"],
    ["Iowa", "IA"],
    ["Kansas", "KS"],
    ["Kentucky", "KY"],
    ["Louisiana", "LA"],
    ["Maine", "ME"],
    ["Maryland", "MD"],
    ["Massachusetts", "MA"],
    ["Michigan", "MI"],
    ["Minnesota", "MN"],
    ["Mississippi", "MS"],
    ["Missouri", "MO"],
    ["Montana", "MT"],
    ["Nebraska", "NE"],
    ["Nevada", "NV"],
    ["New Hampshire", "NH"],
    ["New Jersey", "NJ"],
    ["New Mexico", "NM"],
    ["New York", "NY"],
    ["North Carolina", "NC"],
    ["North Dakota", "ND"],
    ["Ohio", "OH"],
    ["Oklahoma", "OK"],
    ["Oregon", "OR"],
    ["Pennsylvania", "PA"],
    ["Rhode Island", "RI"],
    ["South Carolina", "SC"],
    ["South Dakota", "SD"],
    ["Tennessee", "TN"],
    ["Texas", "TX"],
    ["Utah", "UT"],
    ["Vermont", "VT"],
    ["Virginia", "VA"],
    ["Washington", "WA"],
    ["West Virginia", "WV"],
    ["Wisconsin", "WI"],
    ["Wyoming", "WY"],
  ];

  return (
    <div>
      <Box>
        <Card>
          <CardContent>
            <Box p={2}>
              <Typography color="textSecondary" gutterBottom>
                Coronavirus Data for
              </Typography>
              <Typography variant="h5" component="h2">
                {props.data.state}
              </Typography>
            </Box>
            <Divider />
            <Box p={1}>
              <Grid container spacing={2}>
                <Grid item>
                  <Typography color="textPrimary">New Cases</Typography>
                  <Typography variant="body1" component="p">
                    <strong>
                      <NumberFormat
                        value={props.data.positiveIncrease}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </strong>
                    <br />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color="textPrimary">
                    Currently Hospitalized
                  </Typography>
                  <Typography variant="body1" component="p">
                    <strong>
                      <NumberFormat
                        value={props.data.hospitalizedCurrently}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </strong>
                    <br />
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
          <CardActions>
            <Box margin="auto">
              <InputLabel>State:</InputLabel>
              <Select
                color="primary"
                value={props.currentState}
                onChange={(e) => {
                  props.stateSelChange(e.target.value);
                }}
              >
                {states.map((stateAbbrev) => (
                  <MenuItem value={stateAbbrev[1]}>{stateAbbrev[1]}</MenuItem>
                ))}
              </Select>
            </Box>
          </CardActions>
        </Card>
      </Box>
      <Box mt={1}>
        <Typography variant={"body2"} color={"textSecondary"}>
          <i>
            Data from{" "}
            {props.data.date ? yyyymmdd(props.data.date.toString()) : "n/a"}
          </i>
        </Typography>
        <Typography variant={"body2"} color={"textSecondary"}>
          Source:{" "}
          <Link
            href="https://covidtracking.com/"
            target="_blank"
            rel="noopener"
          >
            CovidTracking.com
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default DataCard;
