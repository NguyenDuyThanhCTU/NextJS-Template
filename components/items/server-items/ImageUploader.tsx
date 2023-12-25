import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useDropzone } from "react-dropzone";

const ImageUploader = (onChange: any) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = (acceptedFiles: any) => {
    // Handle the dropped file here (e.g., upload to server, update state, etc.)
    const file = acceptedFiles[0];
    setUploadedFile(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="w-full max-w-xs mx-auto">
      <div
        {...getRootProps()}
        className={`bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg p-6 text-center ${
          isDragActive ? "border-blue-500" : ""
        }`}
      >
        <input {...getInputProps()} />
        {uploadedFile ? (
          <img
            src={URL.createObjectURL(uploadedFile)}
            alt="Uploaded"
            className="w-full h-auto mb-4 rounded-lg"
          />
        ) : (
          <div>
            <FaCloudUploadAlt className="mx-auto text-4xl mb-2 text-gray-600" />
            <p>Drag & Drop or Click to Upload</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
