import React from 'react';
import './SearchBar.css';

// created an object that can be used with the Yelp API search parameters
const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Viewed': 'review_count'
};

class SearchBar extends React.Component {
    // The purpose of renderSortByOptions() is to dynamically create the list items 
    // needed to display the sort options (Best Match, Highest Rated, Most Reviewed). 
    // This is to help future proof against potential changes to the Yelp API.
    renderSortByOptions() {
        // iterate through the keys and values of the sortByOptions object and return a list item. 
        return Object.keys(sortByOptions).map(sortByOption => {
            // sortByOption is a callback function that allows us to store object values in a variable called sortByObjectValue
            let sortByOptionValue = sortByOptions[sortByOption];

            return <li key={sortByOptionValue}>{sortByOption}</li>
            });
        }

    render() {
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                {this.renderSortByOptions}
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
    }
}

export default SearchBar;