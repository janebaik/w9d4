class FollowToggle {
  constructor($el) {
    // debugger
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.$el = $el;

    this.render();
  }

  render(){
    if (this.followState === "unfollowed"){
      this.$el.text("follow");
    } else if (this.followState === "followed") {
      this.$el.text("unfollow");
    }
  }
}

module.exports = FollowToggle;

