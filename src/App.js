import React, { Component } from 'react';
import ContactsList from './components/ContactsList/ContactsList';
import AddContacts from './components/AddContacts/AddContacts';
import Filter from './components/Filter/Filter';
import Title from './components/Title/Title';
import { connect } from 'react-redux';
import operations from './redux/operations';
import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <>
        <h1>Телефонная книга</h1>
        <Title title={'Добавить контакт'} />
        <AddContacts />
        <Filter />
        <Title title={'Список контактов'} />
        <ContactsList />
      </>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
