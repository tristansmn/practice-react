import React from 'react';

class SearchBar extends React.Component {
	// with user events,you have to initialize in react to control them
	state = {term: ''}

	onFormSubmit = event => {
		event.preventDefault()
        this.props.onFormSubmit(this.state.term)

	}

    // in form : need to pass an event "onSubmit"
    // in inpout : need to pass an event "onChange"

	render () {
	  return (
	  	<div className="ui segment">
		  <form form className='ui form' onSubmit={this.onFormSubmit}>
		    <div className='field'>
		      <label>Search Video</label>
		        <input type='text' 
		               placeholder="Put something here"
		               value={this.state.term} // the input will take the value of the object when it will be update
		               onChange={e => this.setState({term: e.target.value})}>     
		        </input>
		      </div>
		  </form>
		</div>
	  )
	}
}

export default SearchBar;