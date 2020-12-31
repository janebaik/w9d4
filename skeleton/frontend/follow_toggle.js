class FollowToggle {
  constructor($el) {
    // debugger
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.$el = $el;

    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.text("follow");
    } else if (this.followState === "followed") {
      this.$el.text("unfollow");
    }
  }

  followUser(id) {
    return $.ajax({
      method: "POST",
      url: `/users/${id}/follow`,
    });
  }

  handleClick() {
    this.$el.on("click", (e) => {
      // debugger;
      e.preventDefault();
      // debugger;
      alert("line 23");
      this.followUser(this.userId);
      // debugger;
    });

    // this.$el.click(function (event) {
    //   event.preventDefault();
    //   alert("line 23");
    //   // if (this.followState === "unfollowed") {
    //   debugger;
    //   return $.ajax({
    //     method: "POST",
    //     url: "/users/:id/follow",
    //   });
    //   // }
    // });
  }
}

module.exports = FollowToggle;
