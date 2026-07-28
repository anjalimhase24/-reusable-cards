import './Card.css'

function Card({ title, description, image, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-footer">
          <span className="price">{price}</span>
          <button>View</button>
        </div>
      </div>
    </div>
  )
}

export default Card
