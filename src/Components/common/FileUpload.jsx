import React, { useState } from 'react';
import { Upload, X, CheckCircle, Loader2 } from 'lucide-react';
import { uploadToCloudinary } from '../../utils/cloudinary';

const FileUpload = ({ label, onUploadComplete, initialValue = null, required = false, className = '' }) => {
  const [preview, setPreview] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(!!initialValue);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setPreview(URL.createObjectURL(selectedFile));
    setUploaded(false);

    // Auto-upload for simplicity, but we can also trigger it manually
    setLoading(true);
    try {
      const url = await uploadToCloudinary(selectedFile);
      onUploadComplete(url);
      setUploaded(true);
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setLoading(false);
    }
  };

  const removeFile = () => {
    setPreview(null);
    setUploaded(false);
    onUploadComplete('');
  };

  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      {label && (
        <label className="text-sm font-semibold text-neutral-600 tracking-wide uppercase">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative group border-2 border-dashed border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-400 transition-all duration-300 min-h-[200px] flex items-center justify-center bg-neutral-50/50">
        {preview ? (
          <div className="w-full h-full relative group">
            <img src={preview} alt="Preview" className="w-full h-48 object-cover rounded-2xl" />
            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <button 
                type="button"
                onClick={removeFile}
                className="p-3 bg-red-500/80 hover:bg-red-500 rounded-full text-white backdrop-blur-sm transition-colors shadow-lg"
              >
                <X size={20} />
              </button>
            </div>

            {loading && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-white gap-2 rounded-2xl">
                <Loader2 className="animate-spin" size={32} />
                <span className="text-xs font-bold tracking-widest uppercase">Uploading...</span>
              </div>
            )}

            {uploaded && !loading && (
              <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg">
                <CheckCircle size={16} />
              </div>
            )}
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-full h-48 cursor-pointer hover:bg-neutral-100/80 transition-colors">
            <Upload size={32} className="text-neutral-400 mb-2 group-hover:text-neutral-800 transition-colors" />
            <span className="text-sm font-medium text-neutral-500 group-hover:text-neutral-800">Click to upload image</span>
            <span className="text-[10px] text-neutral-400 mt-1 uppercase tracking-tighter">PNG, JPG or WEBP</span>
            <input 
              type="file" 
              className="hidden" 
              onChange={handleFileChange} 
              accept="image/*"
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
