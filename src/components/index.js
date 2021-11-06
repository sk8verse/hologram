export const boards = [
  { name: 'Wood', color: 'bg-yellow-100', texture: 'wood' },
  { name: 'White', color: 'bg-white', texture: 'white' },
  { name: 'Black', color: 'bg-black', texture: 'black' },
  { name: 'Red', color: 'bg-red-500', texture: 'red' },
  { name: 'Orange', color: 'bg-yellow-600', texture: 'orange' },
  { name: 'Yellow', color: 'bg-yellow-300', texture: 'yellow' },
  { name: 'Green', color: 'bg-green-600', texture: 'green' },
  { name: 'Blue', color: 'bg-blue-600', texture: 'blue' },
  { name: 'Indigo', color: 'bg-indigo-600', texture: 'indigo' },
  { name: 'Violet', color: 'bg-purple-600', texture: 'violet' },
  {
    name: 'Bronze',
    color: 'bg-yellow-900',
    texture: 'bronze',
    material: { metalness: 0.95, roughness: 0.2 }
  },
  {
    name: 'Silver',
    color: 'bg-gray-300',
    texture: 'silver',
    material: { metalness: 0.95, roughness: 0.15 }
  },
  {
    name: 'Gold',
    color: 'bg-yellow-500',
    texture: 'gold',
    material: { metalness: 0.8, roughness: 0.5 }
  }
]

export const trucks = {
  color: 0xfffffff,
  metalness: 0.9,
  roughness: 0.3
}

export const wheels = {
  color: 0x555555,
  metalness: 0.2,
  roughness: 0.7
}

export const boardFromId = (id) => {
  if (id <= 8) return boards[12]
  else if (id <= 96) return boards[11]
  else if (id <= 984) return boards[10]
  else return boards[id % (boards.length - 3)]
}
