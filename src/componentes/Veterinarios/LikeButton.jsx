import classNames from 'classnames';
import IconUnliked from "../../assets/like.png";
import IconLiked from "../../assets/like_filled.png";

const LikeButton = ({ children, isLike, onLike }) => {
  const Icon = isLike ? IconLiked : IconUnliked;

  return (
    <div
      className={classNames('likeButton', {
        'likeButton-active': isLike,
      })}
      onClick={event => {
        event.preventDefault();
        onLike(event);
      }}
      style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
    >
      <img src={Icon} alt="Like Icon" style={{ marginRight: '8px', width: '40px' }} />
    </div>
  );
};

export default LikeButton;