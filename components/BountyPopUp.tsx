"use client";

import React from 'react';
import Modal from 'react-modal';
import { Styles } from 'react-modal';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BountyPopUp = ({ isOpen, setIsOpen }: ModalProps) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: "2/3",
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "#181818",
      border: "none",
      padding: "0px",
    },
  };

  return (
    <div className="gap-4 flex-col">
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles as Styles}
      >
        <div className="p-5 h-full flex flex-col items-center justify-center gap-3">
          <h1 className="font-semibold p-2 text-center">Please connect your wallet.</h1>
          <button
            type="button"
            className="bg-red-500 text-background rounded-lg font-semibold p-3"
            onClick={() => {
              console.log('Close button clicked');
              setIsOpen(false);
              console.log(isOpen);
            }}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BountyPopUp;