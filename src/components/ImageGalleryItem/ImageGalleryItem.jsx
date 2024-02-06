export const ImageGalleryItem = ({ id, webformatURL, onClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={onClick}>
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt=""
        onClick={onClick}
      />
    </li>
  );
};
