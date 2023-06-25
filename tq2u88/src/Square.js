
function Square({value, onSquareClick}) {

  const handleClick = () => {
    console.log("clicked");
  }

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
