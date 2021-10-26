import PropTypes from "prop-types";

const ImageGalleryItem = ({ obj, imgClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={obj.webformatURL}
        alt={obj.tags}
        className="ImageGalleryItem-image"
        onClick={() => {
          imgClick(obj);
        }}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  obj: PropTypes.object,
  imgClick: PropTypes.func,
};

export default ImageGalleryItem;
