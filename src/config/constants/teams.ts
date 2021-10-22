import { Team } from './types'

const teams: Team[] = [
  {
    id: 1,
    name: 'Cnft Storm',
    description: "The storm's a-comin! Watch out! These bulls are stampeding in a cnfty surge!",
    images: {
      lg: 'cnft-storm-lg.png',
      md: 'cnft-storm-md.png',
      sm: 'cnft-storm-sm.png',
      alt: 'cnft-storm-alt.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/cnft-storm.png',
    },
    background: 'cnft-storm-bg.svg',
    textColor: '#191326',
    users: 0,
    points: 0,
  },
  {
    id: 2,
    name: 'Fearsome Flippers',
    description: "The flippening is coming. Don't get in these bunnies' way, or you'll get flipped too!",
    images: {
      lg: 'fearsome-flippers-lg.png',
      md: 'fearsome-flippers-md.png',
      sm: 'fearsome-flippers-sm.png',
      alt: 'fearsome-flippers-alt.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/fearsome-flippers.png',
    },
    background: 'fearsome-flippers-bg.svg',
    textColor: '#FFFFFF',
    users: 0,
    points: 0,
  },
  {
    id: 3,
    name: 'Chaotic Cnftrs',
    description: 'Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!',
    images: {
      lg: 'chaotic-cnftrs-lg.png',
      md: 'chaotic-cnftrs-md.png',
      sm: 'chaotic-cnftrs-sm.png',
      alt: 'chaotic-cnftrs-alt.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/chaotic-cnftrs.png',
    },
    background: 'chaotic-cnftrs-bg.svg',
    textColor: '#191326',
    users: 0,
    points: 0,
  },
]

export default teams
