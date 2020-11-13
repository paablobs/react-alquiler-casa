import { Divider, Grid } from "@material-ui/core";
import React from "react";
import Header from "./Header/Header";
import HouseCard from "./HouseCard";
import "../css/app.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div>
            <Grid container direction="row" alignItems="center" justify="center" spacing={3}>
              <Grid item xs={4}>
                <HouseCard
                  city="Río Cuarto - Córdoba"
                  address="Hipolito Yrigoyen 420"
                  shortDescription="Casa con patio"
                  description="2 dormitorios, 2 baños, patio grande para el rope"
                />
              </Grid>
              <Grid item xs={4}>
                <HouseCard
                  city="Río Cuarto - Córdoba"
                  address="Mitre 420"
                  shortDescription="Depto con balcon"
                  description="Departamento 1 dormitorio, 80m2, con balcon"
                />
              </Grid>
              <Grid item xs={4}>
                <HouseCard
                  city="Río Cuarto - Córdoba"
                  address="Alberdi 420"
                  shortDescription="Casa interna"
                  description="Casa interna dentro de otra casa re grande, 1 dormitorio con asador"
                />
              </Grid>
            </Grid>
            <Divider style={{ marginBottom: "50px" }} />
            <Grid container direction="row" alignItems="center" justify="center" spacing={3}>
              <Grid item xs={4}>
                <HouseCard
                  city="Río Cuarto - Córdoba"
                  address="Hipolito Yrigoyen 420"
                  shortDescription="Casa con patio"
                  description="2 dormitorios, 2 baños, patio grande para el rope"
                />
              </Grid>
              <Grid item xs={4}>
                <HouseCard
                  city="Río Cuarto - Córdoba"
                  address="Mitre 420"
                  shortDescription="Depto con balcon"
                  description="Departamento 1 dormitorio, 80m2, con balcon"
                />
              </Grid>
              <Grid item xs={4}>
                <HouseCard
                  city="Río Cuarto - Córdoba"
                  address="Alberdi 420"
                  shortDescription="Casa interna"
                  description="Casa interna dentro de otra casa re grande, 1 dormitorio con asador"
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
