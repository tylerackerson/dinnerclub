NewMeal = React.createClass({
  getInitialState: function(){
      // max_attendees: "",
    return {
      main_course: "",
      meal_time: ""
    };
  },

  updateMainCourse: function(e) {
    e.preventDefault();
    this.setState( { main_course: e.currentTarget.value } );
  },

  // updateMaxAttendees: function(e) {
  //   e.preventDefault();
  //   this.setState( { max_attendees: e.currentTarget.value } );
  // },

  updateMealTime: function(e) {
    var date = e.toDate();
    this.setState({ meal_time: date });
  },

  handleNewMeal: function(e) {
    e.preventDefault();
    debugger;
    ApiUtil.handleNewMeal({meal: this.state});

    // this.props.history.pushState(null, "/meals/" + mealId)
    // this.props.history.pushState(null, "meals/1");
  },

  dummyMeal: function(){
    return ['tyler@tyler.tyler', 'jeff@jeff.jeff', 'andrew@andrew.andrew'];
  },

  render: function(){
            // <input className="form-control"
            //        type=""
            //        placeholder="How many are attending?"
            //        onChange={this.updateMaxAttendees}
            //        id="pac-input"/>
    return (
      <div className="container text-center top-buffer">
        <div className="row">
        <div className="col-sm-6 col-sm-offset-3 meal">
          <h3 className="header"> New Meal </h3>
          <form>
            <input className="form-control"
                   type="text"
                   placeholder="What's cookin'?"
                   onChange={this.updateMainCourse}
                   id="pac-input"/>
            <Datetime onChange={this.updateMealTime} />
          </form>

          <h3 className="top-buffer"> Attendees </h3>
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <AddAttendee />
              <table className="table">
                <div className="row"> {
                  this.dummyMeal().map(function(attendee){
                    return <Attendee key={attendee} attendee={attendee} />;
                  })
                }
                </div>
              </table>
            </div>
          </div>

          <button className="btn btn-primary top-buffer create-meal"
            onClick={this.handleNewMeal}>
            Create Meal
          </button>
        </div>
        </div>
      </div>
    );
  }
});
