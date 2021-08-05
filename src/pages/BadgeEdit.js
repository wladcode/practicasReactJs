import React from "react";

import Badge from "../componentes/badge/Badge";
import BadgeForm from "../componentes/badgeform/BadgeForm";

import header from "../assets/platziconf-logo.svg";
import "./styles/BadgeEdit.css";

import api from "../api/api";
import PageLoading from "../componentes/pageloading/PageLoading";

class BagdeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({
      loading: true,
      error: null
    });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({
        loading: false,
        form: data
      });

    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }



  };

  handleChange = e => {
    //const nextForm = this.state.form;
    //nextForm[e.target.name] = e.target.value;

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    console.log("In handleSubmit");
    e.preventDefault(); // permite que no se envie el formulario
    this.setState({
      loading: true,
      error: null
    });

    try {
      console.log("state: ", this.state);
      await api.badges.update(this.props.match.params.badgeId, this.state.form);

      this.setState({
        loading: false
      });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }

    console.log("state: ", this.props.formValues);
  };

  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className='BadgeEdit_hero'>
          <img
            className='BadgeEdit_hero-image img-fluid'
            src={header}
            alt='Logo'
          />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                email={this.state.form.email || "EMAIL"}
                avatarUrl='https://s.gravatar.com/avatar/1f895306b4331da3cc6913120f2ed123?s=80'
              />
            </div>

            <div className='col-6'>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
                title='Edit Attendant'
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BagdeEdit;
