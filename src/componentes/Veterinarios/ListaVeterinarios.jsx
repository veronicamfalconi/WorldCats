import React, { useState } from 'react';
import Veterinario from './Veterinario';

const ListaVeterinarios = () => {
  const [veterinarios, setVeterinarios] = useState([
    { id: 1, nombre: 'Dr. López', especialidad: 'Cardiología', esFavorito: false },
    { id: 2, nombre: 'Dra. Pérez', especialidad: 'Dermatología', esFavorito: false },
    { id: 3, nombre: 'Dr. Gómez', especialidad: 'Oftalmología', esFavorito: false },
  ]);

  const toggleFavorito = (id) => {
    setVeterinarios(veterinarios.map(veterinario => 
      veterinario.id === id 
        ? { ...veterinario, esFavorito: !veterinario.esFavorito } 
        : veterinario
    ));
  };

  const veterinariosFavoritos = veterinarios.filter(veterinario => veterinario.esFavorito);

  return (
    <div>
      <h1>Lista de Veterinarios</h1>
      {veterinarios.map(veterinario => (
        <Veterinario
          key={veterinario.id}
          veterinario={veterinario}
          onToggleFavorito={toggleFavorito}
        />
      ))}

      <h2>Favoritos</h2>
      {veterinariosFavoritos.length > 0 ? (
        veterinariosFavoritos.map(veterinario => (
          <Veterinario
            key={veterinario.id}
            veterinario={veterinario}
            onToggleFavorito={toggleFavorito}
          />
        ))
      ) : (
        <p>No hay veterinarios favoritos seleccionados.</p>
      )}
    </div>
  );
};

export default ListaVeterinarios;