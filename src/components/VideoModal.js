import React from 'react';

// Video Modal Component
const VideoModal = ({ isOpen, onClose, videoUrl, videoTitle = "Video" }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div 
      className="video-modal-overlay"
      onClick={handleBackdropClick}
    >
      {/* Opak siyah backdrop */}
      <div className="video-modal-backdrop"></div>
      
      {/* Video Modal Content */}
      <div className="video-modal-content">
        {/* Header */}
        <div className="video-modal-header">
          <h3 className="video-modal-title">{videoTitle}</h3>
          <button
            onClick={handleCloseClick}
            className="video-modal-close"
            aria-label="Videoyu kapat"
          >
            ×
          </button>
        </div>

        {/* Video Container */}
        <div className="video-modal-body">
          {videoUrl ? (
            <video
              controls
              autoPlay
              className="video-modal-player"
              poster="/images/video-poster.jpg" // Video poster'ı (opsiyonel)
            >
              <source src={videoUrl} type="video/mp4" />
              <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
          ) : (
            <div className="video-modal-placeholder">
              <div className="video-placeholder-content">
                <span className="video-placeholder-icon">🎥</span>
                <h4>Video Yakında Eklenecek</h4>
                <p>Tanıtım videomuz hazırlanıyor...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal; 