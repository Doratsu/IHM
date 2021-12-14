import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs md={6}>
        <Item id="LexicalItem" xs>
          Item_French
          <IconButton id="LexicalIcon">
            <VolumeUpIcon></VolumeUpIcon>
          </IconButton>
        </Item>
      </Grid>

      <Grid item xs md={6}>
        <Item id="LexicalItem" xs>
          Item_English
          <IconButton id="LexicalIcon">
            <VolumeUpIcon></VolumeUpIcon>
          </IconButton>
        </Item>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid container item spacing={4}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
