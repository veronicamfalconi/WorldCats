import React from 'react';

const Veterinario = ({ veterinario, onToggleFavorito }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{veterinario.nombre}</h2>
      <p>Especialidad: {veterinario.especialidad}</p>
      <button onClick={() => onToggleFavorito(veterinario.id)}>
        {veterinario.esFavorito ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
      </button>
    </div>
  );
};

export default Veterinario;
