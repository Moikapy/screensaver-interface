import React, { useState, useEffect } from 'react'
import ActionButton from './ActionButton'
import VideoPlayer from '../MediaViewer/VideoPlayer'
import AudioPlayer from '../MediaViewer/AudioPlayer'
import MediaViewer from '../MediaViewerV2'
const ImageWithActions = ({ nft }) => {
  const [type, setType] = useState('')

  useEffect(() => {
    console.log('NFT IMAGE', nft)

    if (!nft?.mimeType) return
    const typeArray = nft?.mimeType
    // .split('/')
    setType(typeArray)
  }, [nft])

  return (
    <div className={'min-h-96'}>
      {type === '' && <div>Loading...</div>}

      <div className={'h-96'}><MediaViewer mimeType={type}
        displayUri={nft.mediaUri}
        artifactUri={nft.mediaUri} alt={nft?.name + nft?.tokenId} /></div>


      <div className={'absolute top-2 right-2 flex pt-100%'}>

      </div>
    </div>
  )
}

export default ImageWithActions
