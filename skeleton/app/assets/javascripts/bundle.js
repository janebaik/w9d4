/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

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
      dataType: "json",
      success: function(res){
       console.log(res)
      }
    });
  }

  deleteUser(id){
    return $.ajax({
      method: "DELETE",
      url: `/users/${id}/follow`,
      dataType:"json",
      success: function (res) {
        console.log(res)
      }
    })
  }


  handleClick() {
    this.$el.on("click", (e) => {
      // debugger;
      e.preventDefault();
      // debugger;
      if(this.followState === "unfollowed"){
        this.followUser(this.userId);
        
      }
      else if (this.followState === "followed") {
        // debugger
        this.deleteUser(this.userId);
      }
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

$(() => {
    const $b = $(".follow-toggle")
    $b.each(function(index){
        new FollowToggle($(this))
    })
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map