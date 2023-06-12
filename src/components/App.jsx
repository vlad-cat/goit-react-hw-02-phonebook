import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import appStyles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contact list.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
      };
    });
  };

  onChangeFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
  };

  deleteContact = evt => {
    const toDeleteContactId = evt.target.value;
    console.log(toDeleteContactId);

    this.setState(prevState => {
      const contacts = prevState.contacts;
      const newContacts = contacts.filter(contact => {
        return contact.id !== toDeleteContactId;
      });
      return {
        contacts: newContacts,
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts(contacts, filter);
    return (
      <div className={appStyles.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter onChangeFilter={this.onChangeFilter} filter={filter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
