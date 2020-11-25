import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  // Adding a constructor to handle state
  constructor(props){
    super(props);

    // Setting the initial state
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match"
    };

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };

    // Binding methods which use "this" in the constructor
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  // returns the current CSS class for a sorting option
  getSortByClass(sortByOption) {
    if (this.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  // sets the state of a sorting option
  handleSortByChange (sortByOption) {
    this.setState({
      sortBy: sortByOption.value
    })
  }

  // Handling changes in the input element "Terms" which is the input for businesses
  handleTermChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  // Handling changes in the input element "location" which is the location to search in
  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    })
  }
  
  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault()
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      // the className in this <li> will conditionally style each sort by option, 
      // displaying to the user which sorting option is currently selected.
      // I'm also binding this and sortByOptionValue on click, ensuring the method
      // is called with the appropriate value when clicked.
      return <li 
              key={sortByOptionValue} 
              className={this.getSortByClass(sortByOptionValue)}
              onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
              >{sortByOption}</li>;
    });
  }

  

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;