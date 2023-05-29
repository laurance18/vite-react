import './Die.css'

function Die(props) {
  return (
    <div >
      <h2 className="die">{props.value}</h2>
    </div>
  );
}

export default Die;