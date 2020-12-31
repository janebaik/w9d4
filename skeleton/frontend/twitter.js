const FollowToggle = require("./follow_toggle.js");

$(() => {
    const $b = $(".follow-toggle")
    $b.each(function(index){
        new FollowToggle($(this))
    })
});
