import React from 'react'

import ImageCard from '../ImageCard'
import AuctionCountdownTextRow from '../AuctionCountdownTextRow'

import { IProps } from './types'
import { useState, useEffect } from 'react'
import { storage } from '../../config/firebase'
import axios from 'axios'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
import { GALLERY_ABI } from '../../constants/gallery'
import Modal from '../../components/Modal'
import classNames from 'classnames'
import { injected } from '../../connectors'
import { useRouter } from 'next/router'
import { shortenAddress } from '../../utils'
import { getNetworkLibrary } from '../../connectors'
import AccountId from '../AccountId'

var utils = require('ethers').utils

const NFTItemCard: React.FC<IProps> = ({
  nft,
  coverImageSrc,
  creator,
  endDateTime,
  amountCollected,
}) => {
  const [bid, setBid] = useState<number | undefined>()
  const [forSale, setForSale] = useState(false)

  // get current bids
  async function currentBids() {
    if (!nft?.tokenId) return

    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ID,
      GALLERY_ABI,
      getNetworkLibrary(),
    )

    var currentBid = await contract.currentBidDetailsOfToken(nft.tokenId)

    console.log('BID', utils.formatEther(currentBid[0]))
    if (utils.formatEther(currentBid[0]) === '0.0') {
      setBid(undefined)
    } else {
      setBid(utils.formatEther(currentBid[0]))
    }
  }

  // get approved
  async function getApproved() {
    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ID,
      GALLERY_ABI,
      getNetworkLibrary(),
    )
    var approvedAddress = await contract.getApproved(nft?.tokenId)

    console.log('Approved Address', approvedAddress)

    setForSale(approvedAddress === process.env.NEXT_PUBLIC_CONTRACT_ID)
  }

  useEffect(() => {
    getApproved()
    currentBids()
  }, [])

  return (
    <ImageCard
      nft={nft}
      srcUrl={nft.image}
      // altText={`${nft.name} cover image`}
      footer={
        <div className={'py-3 bg-white bg-opacity-5 font-medium px-5'}>
          <div className={'flex flex-col h-20 justify-center'}>
            <div className={'text-xl font-medium'}>CURRENT BID</div>

            <div className={'text-3xl font-light'}>
              {!!bid
                ? `${bid} MATIC`
                : forSale
                ? 'No bids yet'
                : 'Not for sale'}
            </div>
          </div>
        </div>
      }
    >
      <div
        className={
          'flex flex-col justify-start space-y-2 px-5 overflow-hidden h-28'
        }
      >
        <h1 className={'font-bold text-2xl text-white mt-1'}>{nft.name}</h1>
        <h2 className={'font-medium text-l'}>
          <AccountId address={creator} />
        </h2>
        <h2 className={'font-medium text-md text-gray-300 overflow-visible'}>
          {nft.tokenId}
        </h2>
      </div>
    </ImageCard>
  )
}

export default NFTItemCard
