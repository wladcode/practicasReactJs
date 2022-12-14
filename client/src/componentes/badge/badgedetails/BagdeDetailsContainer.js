import React from "react";

import api from "../../../api/api";
import PageLoading from "../../pageloading/PageLoading";
import PageError from "../../pageerror/PageError";
import BadgeDetails from "./BadgeDetails";

class BagdeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      console.log(this.props.match.params.badgeId);
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };

  onDeleteBadge = async (e) => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      await api.badges.remove(this.props.match.params.badgeId);

      this.setState({
        loading: false,
      });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    console.log(this.state);

    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <BadgeDetails
        badge={this.state.data}
        modalIsOpen={this.state.modalIsOpen}
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        onDeleteBadge={this.onDeleteBadge}
      />
    );
  }
}

export default BagdeDetailsContainer;
