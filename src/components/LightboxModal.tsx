import React from 'react';
import { X, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  onClose,
}) => {
  if (!isOpen || !imageUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative max-w-4xl max-h-[90vh] z-10 animate-modal-in flex flex-col items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:right-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
          aria-label="Close image zoom"
        >
          <X className="w-5 h-5" />
        </button>

        {/* High-res Image Frame */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[80vh] w-auto object-contain"
          />
        </div>

        {/* Caption */}
        <div className="mt-3 text-center text-white">
          <p className="font-serif text-lg font-medium text-[#F5DFE4]">{title}</p>
          <p className="text-xs text-[#C5B4B9]">Aurelle Studio High Definition Transformation</p>
        </div>
      </div>
    </div>
  );
};
