import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ id, name, number, onDelete }) => {
  return (
    <ul className="gallery">
      <ImageGalleryItem />
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
