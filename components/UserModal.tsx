import { IBounty } from '@/models/bounty.model';
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { Styles } from 'react-modal';

type ModalProps = {
  bounty: IBounty;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserModal = ({ bounty, isOpen, setIsOpen }: ModalProps) => {
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

  const handleClose = () => {
    console.log("Close button clicked");
    setIsOpen(false);
    console.log("isOpen state after close:", isOpen);
  };

  return (
    <div className="gap-4 flex-col">
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={handleClose}
        style={customStyles as Styles}
      >
        <div className="p-5 h-full flex flex-col items-center justify-center gap-3">
          <h1 className="font-semibold p-2 text-center">{bounty.title}</h1>
          <button
            type="button"
            className="bg-red-500 text-background rounded-lg font-semibold p-3"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default UserModal;