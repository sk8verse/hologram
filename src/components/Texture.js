const { createCanvas, Image } = require("canvas")

const size = 2048

module.exports = (left, right) => {
  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext("2d")

  // ctx.translate(100, 0)
  const leftImage = new Image()
  leftImage.src = left
  ctx.drawImage(leftImage, 100, 0, 1200, size)

  const rightImage = new Image()
  rightImage.src = right
  ctx.drawImage(rightImage, 100 + 1200, 0, 1200, size)

  return canvas.toDataURL()
}
