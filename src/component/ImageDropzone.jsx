import React from 'react';
import PropTypes from 'prop-types';

const ImageDropzone = ({ onImageDrop }) => {
  // Gestion de l'événement de dépôt d'image
  const handleDrop = (event) => {
    event.preventDefault(); // Empêche le comportement par défaut de l'événement
    const file = event.dataTransfer.files[0]; // Récupère le premier fichier déposé
    onImageDrop(file); // Appelle la fonction 'onImageDrop' avec le fichier comme argument
  };

  // Gestion de l'événement de survol avec glissement (drag over)
  const handleDragOver = (event) => {
    event.preventDefault(); // Empêche le comportement par défaut de l'événement
  };

  // Rendu du composant
  return (
    <div 
      className="drop-zone" 
      onDrop={handleDrop} // Gestionnaire d'événement pour le dépôt d'image
      onDragOver={handleDragOver} // Gestionnaire d'événement pour le survol avec glissement
    >
      Glissez et déposez une image ici 
    </div>
  );
};

// Définition des propTypes pour le composant
// Cela sert à vérifier que la prop 'onImageDrop' est bien une fonction et est requise
ImageDropzone.propTypes = {
  onImageDrop: PropTypes.func.isRequired,
};

export default ImageDropzone;
