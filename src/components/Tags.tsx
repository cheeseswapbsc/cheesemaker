import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, BscIcon, FeeIcon } from '@cheeseswapfinance/uikit'

const CoreTag = (props) => (
  <Tag variant="secondary" outline startIcon={<VerifiedIcon />} {...props}>
    Core
  </Tag>
)

const CommunityTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon />} {...props}>
    Community
  </Tag>
)

const HuobiTag = (props) => (
  <Tag variant="huobi" outline startIcon={<BscIcon />} {...props}>
    Huobi
  </Tag>
)

const FeeTag = (props) => (
  <Tag variant="fee" outline startIcon={<FeeIcon />} {...props}>
    Fee
  </Tag>
)

const DualTag = (props) => (
  <Tag variant="textSubtle" outline {...props}>
    Dual
  </Tag>
)

export { CoreTag, CommunityTag, HuobiTag, FeeTag, DualTag }
