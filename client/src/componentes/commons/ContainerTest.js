import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Department from "./department/Department";
import House from "./house/House";
import { useState, useEffect, Component } from "react";
import DepartmentServices from "../api/homepay/DepartmentServices";
import { getUserInfo } from "../api/util";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  root: {
    //display: 'flex',
    width: "100%",
  },

  paper: {
    //padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    //height: 240,
  },
});

const initialData = {
  selectedHouse: {},
  deparmentList: [],
  userData: {},
};

class ContainerTest extends Component {
  state = {
    selectedHouse: {},
    deparmentList: [],
    userData: {},
  };

  /*
    useEffect(() => {
        console.log("selectedHouse changed! ", selectedHouse);
        DepartmentServices.getDeparmentsByHouse(selectedHouse.id).then(response => {
            console.log("response deparments: ", response.data);
    
    
        }).catch(error => {
    
        });
    }, [selectedHouse]);
    */

  selecteHouse = (houseSelected) => {
    console.log("SELECTE HOUISE: ", houseSelected);

    this.setState({
      selectedHouse: houseSelected,
    });

    this.updateDeparmentData(houseSelected);
  };

  updateDeparmentData = (houseSelected) => {
    DepartmentServices.getDeparmentsByHouse(houseSelected.id)
      .then((response) => {
        console.log("response DEPARMENTS: ", response.data);

        this.setState({
          deparmentList: response.data.data,
        });

        console.log("DATA: ", this.state);
      })
      .catch((error) => {});
  };

  render() {
    const { classes } = this.props;
    console.log("PROPS: ", this.props);
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
      <div className={classes.root}>
        <h1>Casas y departamentos</h1>

        <Grid container spacing={2}>
          {/* House */}
          <Grid item xs={12} md={6} lg={6}>
            <Paper className={fixedHeightPaper}>
              {
                <House
                  userData={this.props.user}
                  onSelectHouse={this.selecteHouse}
                />
              }
            </Paper>
          </Grid>
          {/*Depart */}
          <Grid item xs={12} md={6} lg={6}>
            <Paper className={fixedHeightPaper}>
              {
                <Department
                  userData={this.props.user}
                  houseData={this.state.selectedHouse}
                  listData={this.state.deparmentList}
                  onUpdateData={this.updateDeparmentData}
                />
              }
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

/*
componentDidMount() {

    console.log("componentDidMount houseCONTAINER");

    this.loadData();
}

loadData = async ()=> {
    const userData = getUserInfo();
    console.log("DATA USER container: ", userData)

    this.setState({
        userData: userData
    })
}*/

//}

export default withStyles(styles)(HouseContainer);
