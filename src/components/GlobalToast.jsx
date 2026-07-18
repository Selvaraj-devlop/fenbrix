import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import '../toast.css';

const GlobalToast = () => {
  const [toast, setToast] = useState({ visible: false, message: '' });

  useEffect(() => {
    let timeout;
    const handleShowToast = (e) => {
      setToast({ visible: true, message: e.detail });
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setToast((prev) => ({ ...prev, visible: false }));
      }, 3500);
    };

    window.addEventListener('show-toast', handleShowToast);
    return () => {
      window.removeEventListener('show-toast', handleShowToast);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`glass-toast-wrapper ${toast.visible ? 'show' : ''}`}>
      <div className="glass-toast">
        <span className="toast-msg">{toast.message}</span>
        <button className="toast-close" onClick={() => setToast({ visible: false, message: '' })}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default GlobalToast;
