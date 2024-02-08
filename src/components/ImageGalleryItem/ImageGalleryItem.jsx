export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  onClick,
}) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        id={id}
        alt=""
        onClick={() => onClick(largeImageURL)}
      />
    </li>
  );
};
