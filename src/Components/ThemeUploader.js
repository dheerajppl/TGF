import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

function ThemeUploader() {
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.zip',
  });

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('themeZip', file);

      try {
        const response = await axios.post('http://localhost:3001/upload', formData);
        console.log('Upload success:', response.data);
      } catch (error) {
        console.error('Upload failed:', error);
      }
    } else {
      console.error('No file selected for upload.');
    }
  };

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag &amp; drop a theme ZIP file here, or click to select one.</p>
      </div>
      <button onClick={handleUpload}>Upload Theme</button>
    </div>
  );
}

export default ThemeUploader;
