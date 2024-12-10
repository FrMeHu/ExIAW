import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import heroes from './heroes.json'; 

// Definimos el componente funcional SeleccionarHeroes
export default function SeleccionarHeroes() {
  
  // Declaramos el estado local 'hero' y su función de actualización 'setHero'
  const [hero, setHero] = React.useState('');

  // Definimos la función para manejar el cambio del héroe seleccionado
  const handleHeroChange = (event) => {
    setHero(event.target.value);  // Actualizamos el estado 'hero' con el valor seleccionado
  };

  // Filtramos la lista de héroes para obtener solo los que son de 'Marvel Comics'
  const filteredHeroes = heroes.filter(hero => hero.publisher === 'Marvel Comics'); 

  return (
    <Box sx={{ minWidth: 10 }}>
      <FormControl fullWidth>
        <InputLabel id="hero-select-label">Heroes</InputLabel>
        <Select
          labelId="hero-select-label"
          id="hero-select"
          value={hero}  // El valor actual del héroe seleccionado
          label="Heroes"
          onChange={handleHeroChange} // Manejador de evento para cuando se selecciona un nuevo héroe
        >
          {/* Mapeamos los héroes filtrados y los convertimos en elementos de menú */}
          {filteredHeroes.map(hero => (
            <MenuItem key={hero.superhero} value={hero.superhero}>
              {hero.superhero}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}




{/*

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

  
*/}