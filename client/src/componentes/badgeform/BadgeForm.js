import React from "react";

class BadgeForm extends React.Component {
  /*
    state = {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
      }
*/
  handleChange = (e) => {
    // console.log(e);
    /*console.log({
      name: e.target.name,
      value: e.target.value
    });*/

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    console.log("Button was clicked");
  };
  /*
  handleSubmit = e => {
    console.log("In submit");
    e.preventDefault(); // permite que no se envie el formulario

    console.log("state: ", this.props.formValues);
  };
*/
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="">First name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Primer nombre"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Last name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="lastName"
              className="form-control"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Job Tittle</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="jobTitle"
              className="form-control"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onChange={this.props.onChange}
              type="email"
              name="email"
              className="form-control"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="twitter"
              className="form-control"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

          {this.props.error && (
            <div className="alert alert-danger mb-3" role="alert">
              {this.props.error.message}
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
