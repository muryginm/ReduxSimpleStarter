import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <div className='col-md-12'>
        <input
          onChange={this.onInputChange}
          value={this.state.term} />
      </div>
    );
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value,
    });
  }
}

export default SearchBar;
