import React, { useState, useEffect } from 'react';
import { ZoomIn, ZoomOut } from 'lucide-react';

const ZoomControls: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    // Apply zoom to the entire page
    document.body.style.transform = `scale(${zoomLevel})`;
    document.body.style.transformOrigin = 'top center';
    document.body.style.transition = 'transform 0.3s ease';
  }, [zoomLevel]);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.1, 2)); // Max zoom 200%
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.1, 0.5)); // Min zoom 50%
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white rounded-lg shadow-lg p-2">
      <button
        onClick={handleZoomOut}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        disabled={zoomLevel <= 0.5}
        aria-label="Zoom out"
      >
        <ZoomOut size={20} />
      </button>
      <span className="text-sm font-medium min-w-[60px] text-center">
        {Math.round(zoomLevel * 100)}%
      </span>
      <button
        onClick={handleZoomIn}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        disabled={zoomLevel >= 2}
        aria-label="Zoom in"
      >
        <ZoomIn size={20} />
      </button>
    </div>
  );
};

export default ZoomControls; 