import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { fetchImages } from 'api';
import { Modal } from './Modal/Modal';

// const storageKey = 'saved-contacts';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: false,
    isModalOpen: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true, error: false });
      const initialImages = await fetchImages();
      console.log(initialImages);
      this.setState({ images: initialImages });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }

    // const savedContacts = window.localStorage.getItem(storageKey);
    // if (savedContacts !== null) {
    //   this.setState({ contacts: JSON.parse(savedContacts) });
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.contacts !== this.state.contacts) {
    //   window.localStorage.setItem(
    //     storageKey,
    //     JSON.stringify(this.state.contacts)
    //   );
    // }
  }
  handleSubmit = event => {
    event.preventDefault();
    console.dir(event.currentTarget.value);
  };

  handleClick = () => {
    this.setState({ isModalOpen: true });
  };

  // updateFilter = newFilter => {
  //   this.setState({ filter: newFilter });
  // };

  // addContact = newContact => {
  //   this.setState(prevState => {
  //     return prevState.contacts.some(
  //       contact => contact.name === newContact.name
  //     )
  //       ? alert(`${newContact.name} is already in contacts.`)
  //       : {
  //           contacts: [...prevState.contacts, { ...newContact }],
  //         };
  //   });
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.filter(
  //         contact => contact.id !== contactId
  //       ),
  //     };
  //   });
  // };

  render() {
    const { images, isLoading, isModalOpen } = this.state;

    // const filterContacts = contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(filter.toLowerCase())
    // );

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} onClick={this.handleClick} />
        )}
        {images.length > 0 && <Button />}
        {isModalOpen && <Modal images={images} />}

        {/* <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onUpdateFilter={this.updateFilter} />
        {filterContacts.length > 0 && (
          <ContactList
            contacts={filterContacts}
            onDelete={this.deleteContact}
          />
        )} */}
      </div>
    );
  }
}
