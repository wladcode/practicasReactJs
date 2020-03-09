import React from "react";

import Badge from "../componentes/badge/Badge";
import BadgeForm from "../componentes/badgeform/BadgeForm";

import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";

class BagdeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
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

  render() {
    return (
      <React.Fragment>
        

        <div className='BadgeNew_hero'>
          <img className='img-fluid' src={header} alt='Logo' />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl='https://s.gravatar.com/avatar/1f895306b4331da3cc6913120f2ed123?s=80'
              />
            </div>

            <div className='col-6'>
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BagdeNew;
