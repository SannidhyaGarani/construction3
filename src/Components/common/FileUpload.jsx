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

  const removeFile = (e) => {
    e.stopPropagation();
    setPreview(null);
    setUploaded(false);
    onUploadComplete('');
  };

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label className="text-xs font-semibold text-slate-700">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      
      <div className="relative group border-2 border-dashed border-slate-200 hover:border-[#C8842A]/60 rounded-xl overflow-hidden transition-all duration-200 min-h-[160px] flex items-center justify-center bg-slate-50/60">
        {preview ? (
          <div className="w-full h-full relative group">
            <img src={preview} alt="Upload preview" className="w-full h-44 object-cover" />
            
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
              <button 
                type="button"
                onClick={removeFile}
                className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-white text-xs font-semibold shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <X size={14} />
                <span>Remove</span>
              </button>
            </div>

            {loading && (
              <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm flex flex-col items-center justify-center text-white gap-2">
                <Loader2 className="animate-spin text-[#C8842A]" size={28} />
                <span className="text-xs font-medium uppercase tracking-wider text-slate-200">Uploading to cloud...</span>
              </div>
            )}

            {uploaded && !loading && (
              <div className="absolute top-3 right-3 bg-emerald-600 text-white px-2 py-1 rounded-md text-[10px] font-semibold flex items-center gap-1 shadow-sm">
                <CheckCircle size={12} />
                <span>Ready</span>
              </div>
            )}
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-full h-40 cursor-pointer hover:bg-slate-100/70 transition-colors p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-[#C8842A] group-hover:border-[#C8842A]/40 mb-2 transition-colors">
              <Upload size={18} />
            </div>
            <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">Choose an image to upload</span>
            <span className="text-[11px] text-slate-400 mt-0.5">JPG, PNG, WebP up to 10MB</span>
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
