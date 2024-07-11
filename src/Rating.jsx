import { useState } from "react";
import "./Rating.css";
import { FaStar } from "react-icons/fa";

const Rating = ({ users, setUserList, name }) => {
  const totalStars = 5;
  const [starRating, setstarRating] = useState(0);
  const [hoverStar, setHoverStar] = useState(null);

  const handleRating = (rating, userIndex) => {
    console.log(rating, userIndex);
    const arr = [...users];
    const updateUser = arr.map((row) => {
      const obj = Object.assign({}, row);
      if (userIndex === row.id) {
        obj.rating = parseInt(rating);
      }
      return obj;
    });
    console.log(updateUser);
    setstarRating(rating);
    setUserList(updateUser);
  };
  return (
    <div>
      {name}
      {[...Array(totalStars)].map((d, index) => {
        const currentRating = index + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => handleRating(currentRating, index + 1)}
              className="star-input"
            />
            <FaStar
              size={50}
              className="star"
              color={
                currentRating <= (hoverStar || starRating) ? "ffc107" : "e4e5e9"
              }
              onMouseEnter={() => setHoverStar(currentRating)}
              onMouseLeave={() => setHoverStar(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
