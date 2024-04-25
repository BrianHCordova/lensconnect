//created cards for each image
function Card({ title, image }) {
  return (
    <div className="card">
        <a href="#"><img src={image} alt={title} /></a>
    </div>
  );
}

export default Card;

//TODO: create a function for a modal that appears when a card is clicked on.