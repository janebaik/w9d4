class FollowToggle {
  constructor($el) {
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
  }
}

model.exports = FollowToggle;