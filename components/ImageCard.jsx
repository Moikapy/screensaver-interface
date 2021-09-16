import React, { useState, useEffect } from 'react'
import VideoPlayer from './MediaViewer/VideoPlayer'
import AudioPlayer from './MediaViewer/AudioPlayer'
import MediaViewer from './MediaViewerV2'
const ImageCard = ({ srcUrl, nft, footer, children }) => {

  const [type, setType] = useState('')

  useEffect(() => {
    if (!nft?.mimeType) return
    const typeArray = nft?.mimeType
    // .split('/')
    setType(typeArray)
  }, [])

  return (
    <div
      className={
        'w-full transition duration-200 ease-in-out transform hover:-translate-y-1 bg-black hover:shadow-white border-solid border border-gray-800 text-white rounded-2xl '
      }
      style={{ maxWidth: '340px', minWidth: '280px' }}
    >
      <div className={'flex flex-col mx-auto'}>
        <div
          className={'flex flex-col w-full mx-auto space-y-3'}
        >
          <div className={'rounded-t-2xl overflow-hidden h-96 bg-black'}>

            {<MediaViewer alt={nft?.name + nft?.tokenId} mimeType={type}
              displayUri={srcUrl}
              artifactUri={srcUrl} />}
          </div>
          {children && <div>{children}</div>}
        </div>
      </div>
      {footer && (
        <>
          <div
            className={
              'mt-4 mb-3'
            }
          />
          <div className={'mx-auto w-full'}>
            {footer}
          </div>
        </>
      )}
    </div>
  )
}

export default ImageCard
