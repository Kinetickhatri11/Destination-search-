// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInput: '', destinationList: this.props}

  onChangeSearchItem = event => {
    console.log(event.target.value)
    this.setState(() => ({searchInput: event.target.value}))
  }

  render() {
    const {searchInput, destinationList} = this.state
    const searchResults = destinationList.filter(eachDestination =>
      eachDestination.name.includes(searchInput),
    )
    return (
      <div>
        <h1 className="heading">Destination Search</h1>
        <input
          type="search"
          className="search-input"
          placeholder="search"
          onChange={this.onChangeSearchItem}
        />
        <ul className="destination-container">
          {searchResults.map(eachDestination => (
            <DestinationItem
              destinationDetails={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
