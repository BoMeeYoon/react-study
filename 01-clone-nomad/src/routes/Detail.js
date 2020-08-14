import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      // const { state } = location;
      // console.log(state);
      return (
        <div>
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <h1>Detail</h1>
          <h3>{location.state.title}</h3>
          <p>{location.state.year}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
