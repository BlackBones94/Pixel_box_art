import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PixelArtDisplay from './PixelArtDisplay';

const PixelArtCreator = ({ file }) => {
  const [pixels, setPixels] = useState([]); // Utilisation du hook useState pour gérer l'état des pixels
  const pixelSize = 10; // Définition de la taille des pixels pour le rendu CSS

  useEffect(() => {
    if (file) { // Vérifie si un fichier est présent
      const img = new Image(); // Crée un nouvel objet image
      img.onload = () => { // Définit une fonction à exécuter lorsque l'image est chargée
        const canvas = document.createElement('canvas'); // Crée un élément canvas
        const ctx = canvas.getContext('2d'); // Obtient le contexte 2D du canvas
        const pixelWidth = 150; // Définit la largeur en pixels pour le pixel art
        const pixelHeight = Math.round((img.height / img.width) * pixelWidth); // Calcule la hauteur proportionnelle
        canvas.width = pixelWidth; // Définit la largeur du canvas
        canvas.height = pixelHeight; // Définit la hauteur du canvas
        ctx.drawImage(img, 0, 0, pixelWidth, pixelHeight); // Dessine l'image sur le canvas
        const imgData = ctx.getImageData(0, 0, pixelWidth, pixelHeight).data; // Récupère les données de l'image

        let newPixels = []; // Initialise un tableau pour les nouveaux pixels
        for (let i = 0; i < imgData.length; i += 4) { // Parcourt les données de l'image
          const r = imgData[i];      
          const g = imgData[i + 1];  
          const b = imgData[i + 2];  
          const a = imgData[i + 3];  
          newPixels.push(`rgba(${r},${g},${b},${a / 255})`); // Ajoute la couleur du pixel au tableau
        }
        setPixels(newPixels); // Met à jour l'état des pixels avec les nouvelles valeurs
      };
      img.src = URL.createObjectURL(file); // Crée une URL pour le fichier et l'assigne à l'image
    }
  }, [file]); // Dépendance du useEffect au fichier

  // Retourne le composant PixelArtDisplay avec les pixels et la taille des pixels
  return (
    <PixelArtDisplay pixels={pixels} pixelSize={pixelSize} />
  );
};

// Définition des propTypes pour le composant
// Vérifie que la prop 'file' est un objet
PixelArtCreator.propTypes = {
  file: PropTypes.object,
};

export default PixelArtCreator;
