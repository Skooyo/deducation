import React from 'react';
import Modal from 'react-modal';
import { Styles } from 'react-modal';
import { useState } from "react";
import BountyUpload from '@/components/BountyUpload'
import { IBounty } from '@/models/bounty.model';
import uploadFile from '@/utils/ipfs'


type ModalProps = {
  bounty: IBounty
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BountyPopUp = ({ bounty, isOpen, setIsOpen }: ModalProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    files: [] as File[],
    imageUrl: "",
    description: "",
  });

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: "1/2",
      maxWidth: '800px',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "#181818",
      border: "none",
      padding: "0px",
      boxShadow: '0 0 10px 5px rgba(128, 128, 128, 0.5)', // Add this line for gradient gray outline
    },
  };

  const uploadToIpfs = async (file) => {
    console.log("Uploading file to ipfs");
    console.log(file);
    setIsUploading(true);
    // const hash = uploadFile(file);
    // console.log("IPFS Hash is:", hash);
    setIsUploading(false);
  }

  return (
    <div className="gap-4 flex-col">
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles as Styles}
      >
        <div className="p-5 h-full flex flex-col items-center justify-center gap-5">
          <h1 className="text-2xl font-semibold line-clamp-1">{bounty.title}</h1>
          <h1 className="text-xl text-center">{bounty.description}</h1>
          <BountyUpload
            imageUrl = {formData.imageUrl}
            setFiles={setFiles}
            uploadToIpfs = {uploadToIpfs}
            onFieldChange={(url: string) => setFormData(prevState =>({ ...prevState, imageUrl: url}))}
            />
            <div className="flex gap-10 justify-between items-center">
            <button
              onClick={() => setIsOpen(false)}
              className="items-center justify-center px-4 py-3 bg-gradient-to-tl bg-primary
              text-background rounded-lg glow-button font-semibold"
            >
              Submit
            </button>
              <button
                type="button"
                className="items-center justify-center p-2 py-3 bg-gradient-to-tl from-[#ba3030] to-[#df1b1b]
                text-background rounded-lg glow-button font-semibold"
                onClick={() => setIsOpen(false)}
                >
                Cancel
              </button>
            </div>
        </div>
      </Modal>
    </div>
  );
};

export default BountyPopUp;