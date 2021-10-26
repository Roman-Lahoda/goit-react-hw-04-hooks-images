import PropTypes from "prop-types";

import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ arrayImages, imgClick }) => {
  return (
    <ul className="ImageGallery">
      {arrayImages.map((item) => {
        return (
          <ImageGalleryItem key={item.id} obj={item} imgClick={imgClick} />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  arrayImages: PropTypes.array,
  imgClick: PropTypes.func,
};

export default ImageGallery;
