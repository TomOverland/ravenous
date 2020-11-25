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
  }

  // returns the current CSS class for a sorting option
  getSortByClass(sortByOption) {
    if (this.sortBy == sortByOption) {
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

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>;
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
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;