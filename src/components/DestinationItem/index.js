// Write your code here
import './index.css'

const DestinationItem = props => {
  const {name, imgUrl} = props
  return (
    <li className="list-item">
      <div className="item-container">
        <img src={imgUrl} className="destination-image" alt={name} />
        <p className="destination-name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
