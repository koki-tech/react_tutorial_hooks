// import Game from './Game';

const Square = (props) => {
  return (
    <button
    className="square"
    onClick={props.onClick}
    data-e2e={'button-' + props.num}
    >
      {props.value}
    </button>
  );
};

export default Square;