import axios from "axios";
import React from "react";

class Profile extends React.Component {
  state = {
    profile: null,
  };

  getProfile = async (id) => {
    return await axios
      .get(`http://localhost:5000/users/${id}`, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.setState({
          profile: [res.data],
        });
      })
      .catch((err) => console.log(err));
  };

  checkUserLoggedIn = () => {};

  componentDidMount() {
    this.getProfile(this.props.match.params.id);
  }
  render() {
    console.log(this.state.profile);
    return (
      <section>
        {this.state.profile &&
          this.state.profile.map((profile) => (
            <article key={profile.id}>
              <h2>{profile.username}</h2>
              <p>{profile.biography}</p>
              <button>Chat With Me</button>
            </article>
          ))}
      </section>
    );
  }
}

export default Profile;
