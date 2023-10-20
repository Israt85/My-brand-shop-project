import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const StarRating = () => {
  return (
    <Rating
      emptySymbol="AiOutlineStar"
      fullSymbol= 'AiFillStar'
      initialRating={5}         
      readonly
    />
  );
};

export default StarRating;
