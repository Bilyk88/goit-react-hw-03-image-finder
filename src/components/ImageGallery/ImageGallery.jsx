import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};

// {
//   /* export const ContactList = ({ contacts, onDelete }) => {
//   return (
//     <ContactListStyled>
//       {contacts.map(({ id, name, number }) => {
//         return (
//           <ContactItem
//             key={id}
//             id={id}
//             name={name}
//             number={number}
//             onDelete={onDelete}
//           />
//         );
//       })}
//     </ContactListStyled>
//   );
// }; */
// }
