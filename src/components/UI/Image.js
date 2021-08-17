import placeholder from '../../assets/pizza.jpg'

export default function Image (props) {
  // let icon = props.image ? `../../assets/${props.image}` : '../../assets/pizza.jpg';

  return <img src={ require("" + props.image).default } alt={props.alt}>
  </img>
}