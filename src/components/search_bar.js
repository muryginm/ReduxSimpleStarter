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
      <div className='search-bar'>
        <input
          onChange={this.onInputChange}
          value={this.state.term} />
      </div>
    );
  }

  onInputChange(event) {
    const newTerm = event.target.value;

    this.setState({
      term: newTerm,
    });

    this.props.onSearchTermChange(newTerm);
  }
}

export default SearchBar;
