import { HeartFill, Heart, StarFill, Star } from "react-bootstrap-icons";

export const getLifeIcons = (life: number) => {
  if (life === 3) {
    return (
      <div className="hearts-wrap">
        <HeartFill className="heart-icon" />
        <HeartFill className="heart-icon" />
        <HeartFill className="heart-icon" />
      </div>
    );
  }

  if (life === 2) {
    return (
      <div className="hearts-wrap">
        <HeartFill className="heart-icon" />
        <HeartFill className="heart-icon" />
        <Heart className="heart-icon fadeIn" />
      </div>
    );
  }

  if (life === 1) {
    return (
      <div className="hearts-wrap">
        <HeartFill className="heart-icon" />
        <Heart className="heart-icon fadeIn" />
        <Heart className="heart-icon fadeIn" />
      </div>
    );
  }

  return (
    <div className="hearts-wrap">
      <Heart className="heart-icon fadeIn" />
      <Heart className="heart-icon fadeIn" />
      <Heart className="heart-icon fadeIn" />
    </div>
  );
};

export const getStarsIcons = (assertPercetage: number) => {
  if (assertPercetage > 89) {
    return (
      <div className="stars-wrap">
        <StarFill className="star-icon bounceIn delay-100ms" />
        <StarFill className="star-icon bounceIn delay-200ms" />
        <StarFill className="star-icon bounceIn delay-300ms" />
        <StarFill className="star-icon bounceIn delay-400ms" />
        <StarFill className="star-icon bounceIn delay-500ms" />
      </div>
    );
  }

  if (assertPercetage > 69) {
    return (
      <div className="stars-wrap">
        <StarFill className="star-icon bounceIn delay-100ms" />
        <StarFill className="star-icon bounceIn delay-200ms" />
        <StarFill className="star-icon bounceIn delay-300ms" />
        <StarFill className="star-icon bounceIn delay-400ms" />
        <Star className="star-icon" />
      </div>
    );
  }

  if (assertPercetage > 49) {
    return (
      <div className="stars-wrap">
        <StarFill className="star-icon bounceIn delay-100ms" />
        <StarFill className="star-icon bounceIn delay-200ms" />
        <StarFill className="star-icon bounceIn delay-300ms" />
        <Star className="star-icon" />
        <Star className="star-icon" />
      </div>
    );
  }

  if (assertPercetage > 29) {
    return (
      <div className="stars-wrap">
        <StarFill className="star-icon bounceIn delay-100ms" />
        <StarFill className="star-icon bounceIn delay-200ms" />
        <Star className="star-icon" />
        <Star className="star-icon" />
        <Star className="star-icon" />
      </div>
    );
  }

  if (assertPercetage > 1) {
    return (
      <div className="stars-wrap">
        <StarFill className="star-icon bounceIn delay-100ms" />
        <Star className="star-icon" />
        <Star className="star-icon" />
        <Star className="star-icon" />
        <Star className="star-icon" />
      </div>
    );
  }

  return (
    <div className="stars-wrap">
      <Star className="star-icon" />
      <Star className="star-icon" />
      <Star className="star-icon" />
      <Star className="star-icon" />
      <Star className="star-icon" />
    </div>
  );
};
