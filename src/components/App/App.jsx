import { useState } from "react";
import s from "./App.module.css";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

const App = () => {
  const [listContacts, setListContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [searchName, setSearchName] = useState("");

  const handleSearch = (e) => {
    setSearchName(e.target.value);
  };

  const filteredContacts = listContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      {/* <ContactFor />*/}
      <SearchBox value={searchName} onChange={handleSearch} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
