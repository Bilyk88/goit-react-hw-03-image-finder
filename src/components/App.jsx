import { Component } from 'react';
// import { ContactList } from './Contacts/ContactList';
import initialContacts from '../contacts.json';
// import { Filter } from './Filter/Filter';
// import { ContactForm } from './ContactForm/ContactForm';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'api';
import { ImageGallery } from './ImageGallery/ImageGallery';

const storageKey = 'saved-contacts';

export class App extends Component {
  state = {
    images: [],
    contacts: initialContacts,
    filter: '',
  };

  async componentDidMount() {
    try {
      const initialImages = await fetchImages();
      console.log(initialImages);
      this.setState({ images: initialImages });
    } catch (error) {}

    // const savedContacts = window.localStorage.getItem(storageKey);
    // if (savedContacts !== null) {
    //   this.setState({ contacts: JSON.parse(savedContacts) });
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  updateFilter = newFilter => {
    this.setState({ filter: newFilter });
  };

  addContact = newContact => {
    this.setState(prevState => {
      return prevState.contacts.some(
        contact => contact.name === newContact.name
      )
        ? alert(`${newContact.name} is already in contacts.`)
        : {
            contacts: [...prevState.contacts, { ...newContact }],
          };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    // const { contacts, filter } = this.state;

    // const filterContacts = contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(filter.toLowerCase())
    // );

    return (
      <div
        style={{
          height: '100vh',
          maxWidth: '460px',
          padding: '15px',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <Searchbar />
        {this.state.images.length > 0 && (
          <ImageGallery images={this.state.images} />
        )}

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
