import React from 'react';

const Modal = ({ isOPen, onClose, children }) => {
  if (!isOPen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 ">
      <div className="bg-white p-6 rounded-2xl shadow-lg relative">
        <button className="absolute top-2 right-2 text-gray-600 text-2xl cursor-pointer" onClick={onClose}>
          ✖
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;