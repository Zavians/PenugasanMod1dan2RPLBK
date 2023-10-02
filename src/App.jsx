import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Button from "./elements/button";
import TextInput from "./elements/TextInput";

const peopleBio = [
  {
    name: "Kenza Vianda Dwiputra",
    age: 21,
    text: "Semoga Saya Gk NT",
    profile: "https://avatars.githubusercontent.com/u/94980985?v=4",
    nim: "21120120140046",
    email: "kenzatekkom20@gmail.com",
    link: "https://github.com/Zavians",
  },
  {
    name: "Muhammad Fachrurazi",
    age: 21,
    text: "Gk tau gk ada quotes",
    profile: "https://avatars.githubusercontent.com/u/82750808?v=4",
    nim: "21120120140104",
    email: "fachrurazi021@gmail.com",
    link: "https://github.com/fachru24",
  },
  {
    name: "Yahya Oktariansyah",
    age: 21,
    text: "Saya Kahim Saya Bangga",
    profile: "https://avatars.githubusercontent.com/u/82740376?v=4",
    nim: "21120120140037",
    email: "myoktariansyah@students.undip.ac.id",
    link: "https://github.com/myoktariansyah",
  },
  {
    name: "Novita Aulya",
    age: 21,
    text: "Gaktau Males Mau Beli Truk",
    profile: "https://avatars.githubusercontent.com/u/82640637?v=4",
    nim: "21120120140114",
    email: "novitaaly4@gmail.com",
    link: "https://github.com/novitaaly",
  },
];

function App() {
  const [inputName, setInputName] = useState(''); // State untuk input nama
  const [filteredPeople, setFilteredPeople] = useState(peopleBio);

  const handleNameInputChange = (event) => {
    setInputName(event.target.value);
  };

  const handleFilterPeople = () => {
    // Filter data orang berdasarkan input nama
    const filtered = peopleBio.filter((person) =>
      person.name.toLowerCase().includes(inputName.toLowerCase())
    );
    setFilteredPeople(filtered);
  };

  return (
    <>
      <div className='col-md-12'>
        <Header />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h1>Tugas Praktikum</h1>
        <h2>Ini adalah hasil dari penugasan yang dikerjakan oleh kelompok 21</h2>
      </div>
      <div>
          <input
            type='text'
            placeholder='Masukkan nama...'
            value={inputName}
            onChange={handleNameInputChange}
            className='TextInput'
          />
          <button onClick={handleFilterPeople} className='FilterButton'>Filter</button>
        </div>
      <h2>Nama yang dimasukkan: {inputName}</h2>
      <div className='d-flex flex-wrap justify-content-around w-100 p-3'>
        
        {filteredPeople.map((person, index) => (
          <Home key={index} props={person} />
        ))}
      </div>
    </>
  );
}

export default App;



