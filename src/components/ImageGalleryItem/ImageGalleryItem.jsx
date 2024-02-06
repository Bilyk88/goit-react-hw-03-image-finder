export const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt="" />
    </li>
  );
};