import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./Friends.scss";

class Friends extends React.Component {
  state = {
    friends: null,
  };

  getFriends = async () => {
    return await axios
      .get("http://localhost:5000/users", {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getFriends();
  }

  render() {
    return (
      <section className="friend">
        {this.state.friends &&
          this.state.friends.map((friend) => {
            return (
              <article className="friend__container" key={friend.id}>
                <h2 className="friend__name">{friend.username}</h2>
                <p className="friend__biography">{friend.biography}</p>

                <Link to={`/profile/${friend.id}`}>
                  <button className="friend__btn">Profile</button>
                </Link>
              </article>
            );
          })}
      </section>
    );
  }
}

export default Friends;
