
import React, { useState } from 'react';
import ImageDropzone from './component/ImageDropzone';
import PixelArtCreator from './component/PixelArtCreator';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="App">
      <ImageDropzone onImageDrop={setSelectedFile} />
      {selectedFile && <PixelArtCreator file={selectedFile} />}
    </div>
  );
}

export default App;
