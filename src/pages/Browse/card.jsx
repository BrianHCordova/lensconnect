//created cards for each image
function Card({ title, image }) {
  return (
    <div className="card">
        <img src={image} alt={title} id="card-image" />
    </div>
  );
}

export default Card;

//TODO: create a function for a modal that appears when a card is clicked on.