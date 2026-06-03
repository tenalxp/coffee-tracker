// Pixel art avatar SVG components
// 12x12 grid, each cell = one pixel

const _ = null
const W = '#FFFFFF'
const K = '#1A1A1A'
const O = '#FF8C00'  // orange
const R = '#E03535'  // red
const Y = '#FFD700'  // yellow
const G = '#3AAF3A'  // green
const B = '#4488FF'  // blue
const T = '#D4A870'  // tan
const P = '#FF9999'  // pink
const N = '#8B4513'  // brown
const C = '#888899'  // gray
const S = '#A0D8A0'  // sage
const V = '#9966CC'  // violet
const L = '#66CCFF'  // light blue

const AVATARS = [
  {
    id: 'ghost',
    label: 'Ghost',
    bg: '#FF8C00',
    pixels: [
      [_,_,O,O,O,O,O,O,_,_,_,_],
      [_,O,O,O,O,O,O,O,O,_,_,_],
      [O,O,O,O,O,O,O,O,O,O,_,_],
      [O,O,O,O,O,O,O,O,O,O,_,_],
      [O,O,W,W,O,O,O,W,W,O,_,_],
      [O,O,W,K,O,O,O,W,K,O,_,_],
      [O,O,O,O,O,O,O,O,O,O,_,_],
      [O,O,O,O,O,O,O,O,O,O,_,_],
      [O,O,O,O,O,O,O,O,O,O,_,_],
      [O,O,O,O,O,O,O,O,O,O,_,_],
      [O,_,O,O,_,O,_,O,O,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
    ]
  },
  {
    id: 'cat',
    label: 'Cat',
    bg: '#D4A870',
    pixels: [
      [T,K,_,T,T,T,T,T,_,K,T,_],
      [T,K,T,T,T,T,T,T,T,K,T,_],
      [T,T,T,T,T,T,T,T,T,T,T,_],
      [T,T,P,T,T,T,T,T,P,T,T,_],
      [T,K,K,T,T,T,T,T,K,K,T,_],
      [T,T,T,T,T,T,T,T,T,T,T,_],
      [T,T,T,T,P,T,P,T,T,T,T,_],
      [T,T,T,K,K,K,K,K,T,T,T,_],
      [T,T,T,K,T,T,T,K,T,T,T,_],
      [T,T,T,T,T,T,T,T,T,T,T,_],
      [_,T,T,T,T,T,T,T,T,T,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
    ]
  },
  {
    id: 'invader',
    label: 'Invader',
    bg: '#3AAF3A',
    pixels: [
      [_,_,G,_,_,_,_,_,G,_,_,_],
      [_,_,_,G,_,_,_,G,_,_,_,_],
      [_,_,G,G,G,G,G,G,G,_,_,_],
      [_,G,G,K,G,G,G,K,G,G,_,_],
      [G,G,G,G,G,G,G,G,G,G,G,_],
      [G,G,G,G,G,G,G,G,G,G,G,_],
      [G,_,G,G,G,G,G,G,G,_,G,_],
      [_,_,G,_,_,_,_,_,G,_,_,_],
      [_,G,_,G,_,_,_,G,_,G,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
    ]
  },
  {
    id: 'mushroom',
    label: 'Mushroom',
    bg: '#E03535',
    pixels: [
      [_,_,_,R,R,R,R,R,_,_,_,_],
      [_,_,R,R,R,R,R,R,R,_,_,_],
      [_,R,R,W,R,R,R,W,R,R,_,_],
      [R,R,R,W,R,R,R,W,R,R,R,_],
      [R,R,R,R,R,R,R,R,R,R,R,_],
      [R,R,R,R,R,R,R,R,R,R,R,_],
      [_,W,W,W,W,W,W,W,W,W,_,_],
      [_,W,W,W,W,W,W,W,W,W,_,_],
      [_,_,W,W,K,W,W,K,W,_,_,_],
      [_,_,_,W,W,W,W,W,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
    ]
  },
  {
    id: 'robot',
    label: 'Robot',
    bg: '#888899',
    pixels: [
      [_,_,_,_,_,C,_,_,_,_,_,_],
      [_,_,_,_,C,C,C,_,_,_,_,_],
      [_,C,C,C,C,C,C,C,C,C,_,_],
      [_,C,Y,Y,C,C,C,Y,Y,C,_,_],
      [_,C,Y,Y,C,C,C,Y,Y,C,_,_],
      [_,C,C,C,C,C,C,C,C,C,_,_],
      [_,C,C,R,C,C,C,R,C,C,_,_],
      [_,C,C,C,C,C,C,C,C,C,_,_],
      [_,_,C,C,C,C,C,C,C,_,_,_],
      [_,C,_,C,C,C,C,C,_,C,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
    ]
  },
  {
    id: 'frog',
    label: 'Frog',
    bg: '#3AAF3A',
    pixels: [
      [_,G,G,_,_,_,_,_,G,G,_,_],
      [G,W,W,G,_,_,_,G,W,W,G,_],
      [G,K,W,G,G,G,G,G,W,K,G,_],
      [_,G,G,G,G,G,G,G,G,G,_,_],
      [_,G,G,G,G,G,G,G,G,G,_,_],
      [_,G,G,G,G,G,G,G,G,G,_,_],
      [_,G,G,W,G,G,G,W,G,G,_,_],
      [_,G,G,G,G,G,G,G,G,G,_,_],
      [_,_,G,G,G,G,G,G,G,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
    ]
  },
  {
    id: 'skull',
    label: 'Skull',
    bg: '#FFFFFF',
    pixels: [
      [_,_,W,W,W,W,W,W,_,_,_,_],
      [_,W,W,W,W,W,W,W,W,_,_,_],
      [W,W,W,W,W,W,W,W,W,W,_,_],
      [W,W,K,K,W,W,W,K,K,W,_,_],
      [W,W,K,K,W,W,W,K,K,W,_,_],
      [W,W,W,W,W,W,W,W,W,W,_,_],
      [W,W,W,K,W,W,W,K,W,W,_,_],
      [_,W,W,W,W,W,W,W,W,_,_,_],
      [_,W,K,W,K,W,K,W,K,W,_,_],
      [_,W,W,W,W,W,W,W,W,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
    ]
  },
  {
    id: 'bear',
    label: 'Bear',
    bg: '#8B4513',
    pixels: [
      [N,N,_,N,N,N,N,N,_,N,N,_],
      [N,N,N,N,N,N,N,N,N,N,N,_],
      [N,N,N,N,N,N,N,N,N,N,N,_],
      [N,N,K,N,N,N,N,N,K,N,N,_],
      [N,N,N,N,N,N,N,N,N,N,N,_],
      [N,N,N,T,T,T,T,T,N,N,N,_],
      [N,N,N,T,K,T,K,T,N,N,N,_],
      [N,N,N,T,T,K,T,T,N,N,N,_],
      [N,N,N,T,T,T,T,T,N,N,N,_],
      [_,N,N,N,N,N,N,N,N,N,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
    ]
  },
  {
    id: 'star',
    label: 'Star',
    bg: '#FFD700',
    pixels: [
      [_,_,_,_,Y,Y,_,_,_,_,_,_],
      [_,_,_,_,Y,Y,_,_,_,_,_,_],
      [Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,_,_],
      [_,Y,Y,Y,Y,Y,Y,Y,Y,_,_,_],
      [_,_,Y,Y,Y,Y,Y,Y,_,_,_,_],
      [_,Y,Y,_,Y,Y,_,Y,Y,_,_,_],
      [Y,Y,_,_,Y,Y,_,_,Y,Y,_,_],
      [Y,_,_,_,_,_,_,_,_,Y,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
    ]
  },
  {
    id: 'penguin',
    label: 'Penguin',
    bg: '#222244',
    pixels: [
      [_,_,K,K,K,K,K,K,_,_,_,_],
      [_,K,K,K,K,K,K,K,K,_,_,_],
      [_,K,K,W,W,W,W,K,K,_,_,_],
      [_,K,W,W,B,W,B,W,K,_,_,_],
      [_,K,W,W,W,W,W,W,K,_,_,_],
      [_,K,W,W,O,W,O,W,K,_,_,_],
      [_,K,K,W,W,W,W,K,K,_,_,_],
      [_,K,K,K,K,K,K,K,K,_,_,_],
      [_,K,O,K,K,K,K,O,K,_,_,_],
      [_,O,O,_,_,_,_,O,O,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_,_,_],
    ]
  },
]

export const AVATAR_IDS = AVATARS.map(a => a.id)

export function getRandomAvatarId() {
  return AVATAR_IDS[Math.floor(Math.random() * AVATAR_IDS.length)]
}

export function PixelAvatarIcon({ avatarId, size = 48 }) {
  const avatar = AVATARS.find(a => a.id === avatarId) || AVATARS[0]
  const gridSize = avatar.pixels.length
  const cellSize = size / gridSize

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ imageRendering: 'pixelated', display: 'block' }}
    >
      {avatar.pixels.flatMap((row, y) =>
        row.map((color, x) =>
          color ? (
            <rect
              key={`${x}-${y}`}
              x={x * cellSize}
              y={y * cellSize}
              width={cellSize}
              height={cellSize}
              fill={color}
            />
          ) : null
        )
      )}
    </svg>
  )
}

export { AVATARS }
