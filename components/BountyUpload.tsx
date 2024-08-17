'use client'

import { useCallback, Dispatch, SetStateAction } from 'react'
import { useDropzone } from '@uploadthing/react/hooks'
import { generateClientDropzoneAccept } from 'uploadthing/client'
import uploadFile from '@/utils/ipfs'

import { convertFileToUrl } from '@/utils/fileToUrl'

type BountyUploadProps = {
  onFieldChange: (url: string) => void
  imageUrl: string
  setFiles: Dispatch<SetStateAction<File[]>>
  uploadToIpfs: any
}

const BountyUpload = ({ imageUrl, onFieldChange, setFiles, uploadToIpfs}: BountyUploadProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
    onFieldChange(convertFileToUrl(acceptedFiles[0]))
    uploadToIpfs(acceptedFiles[0])    
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*' ? generateClientDropzoneAccept(['image/*']) : undefined,
  })

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-full cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50 md:min-w-[450px]">
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrl ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <img
            src={imageUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col py-5 bg-secondary bg-opacity-20 p-10 h-ful">
          <h3 className="mb-6 mt-2 text-2xl font-semibold">Upload your bounty submission</h3>
          <img src="/assets/icons/upload.svg" width={77} height={77} alt="file upload" />
          <h3 className="mb-2 mt-2 text-white text-opacity-50">Drag & Drop</h3>
          <p className="p-medium-12 mb-4 text-xs text-white text-opacity-50">ZIP</p>
          <button type="button" className="rounded-md bg-[#bebebe] text-background p-3">
            Select from computer
          </button>
        </div>
      )}
    </div>
  )
}

export default BountyUpload;