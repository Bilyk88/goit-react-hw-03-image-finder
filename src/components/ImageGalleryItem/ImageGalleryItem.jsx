export const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={webformatURL} alt="" />
    </li>
  );
};
