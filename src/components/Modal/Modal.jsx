export const Modal = ({ images }) => {
  return (
    <div className="Overlay">
      <div className="Modal">
        {images.map(({ id, largeImageURL }) => {
          return <img src={largeImageURL} key={id} alt="" />;
        })}
      </div>
    </div>
  );
};
// {
//   images.map(({ id, webformatURL }) => {
//     return <ImageGalleryItem key={id} id={id} webformatURL={webformatURL} />;
//   });
// }
