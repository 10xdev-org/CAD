"use client";
import { useState, useEffect } from "react";
import ContentCard from "./ContentCard"; // Replace DocumentCard with ContentCard
import ContentViewer from "./ContentViewer";
import archivesData from "/public/archiveFiles.json";
import { Headphones, PlayCircle } from "lucide-react";

const Archive = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen py-6 px-12">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Archive</h1>
      <ul className="divide-y divide-gray-200 overflow-y-auto">
        {archivesData.map((file) => (
          <li
            key={file.name}
            onClick={() => setSelectedFile(file)}
            className="flex items-center bg-white py-6 px-10 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            {/* Icon for audio */}
            <div className="text-blue-500">
              <Headphones className="w-6 h-6" />
            </div>

            {/* File name */}
            <div className="flex-grow ml-4">
              <p className="text-gray-800 font-medium">{file.name}</p>
            </div>

            {/* Play button */}
            <button
              className="text-green-500 hover:text-green-600 flex items-center"
              onClick={() => setSelectedFile(file)}
            >
              <PlayCircle className="w-6 h-6 mr-1" /> Play
            </button>
          </li>
        ))}
      </ul>

      {/* Display the ContentViewer modal if a document is selected */}
      {selectedFile && (
        <ContentViewer
          name={selectedFile.name}
          type={selectedFile.type}
          src={selectedFile.src}
          onClose={() => setSelectedFile(null)}
        />
      )}
    </div>
  );
};

export default Archive;
