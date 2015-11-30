CreateMeal = React.createClass({
  createMeal: function(e){
    e.preventDefault();
    this.props.history.pushState(null, "/meals/new");
  },

  render: function(){
    return (
      <div className="row text-center top-buffer">
        <form role="form" className="form-inline"
                          onSubmit={this.createMeal}>

            <div className="form-group">
                  <input className="btn btn-primary create-meal"
                         type="submit"
                         value="Create a Meal"/>
            </div>
          </form>
        </div>
    );
  }
});
