import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import "../../css/header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
          className="header">
          <Grid item xs>
            <Logo />
          </Grid>
          <Grid item xs={6} />
          <Grid item xs>
            <Menu />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Header;

// TODO FIX MARGEN QUE SALE DE LA NADA
