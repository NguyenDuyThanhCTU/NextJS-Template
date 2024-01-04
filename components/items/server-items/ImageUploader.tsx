import React, { useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import { uploadImage } from "./Handle";

interface ImageUploaderProps {
  setForm: (value: string) => void;
  Form?: any;
  Field?: any;
}

const ImageUploader = ({ setForm, Field, Form }: ImageUploaderProps) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = (acceptedFiles: any) => {
    const file = acceptedFiles[0];

    uploadImage(file, "avatar").then((url) => {
      setForm({ ...Form, [Field]: url });
      setUploadedFile(file);
    });
  };
  useEffect(() => {
    if (Form[Field] === undefined) {
      setUploadedFile(null);
    }
  }, [Form[Field]]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="w-full max-w-xs mx-auto cursor-pointer">
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
