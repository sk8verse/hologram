const { createCanvas, loadImage } = require("canvas")

const canvasSize = 2048
const deckWidth = 640

export const wrap = async (top, bottom) => {
  const canvas = createCanvas(canvasSize, canvasSize)
  const ctx = canvas.getContext("2d")

  if (bottom) {
    const bottomImage = await loadImage(bottom)
    const aspectWidth = bottomImage.height * 0.3125

    ctx.drawImage(
      bottomImage,
      bottomImage.width / 2 - aspectWidth / 2,
      0,
      aspectWidth,
      bottomImage.height,
      0,
      0,
      deckWidth,
      canvasSize
    )
  }

  if (top) {
    const topImage = await loadImage(top)
    const aspectWidth = topImage.height * 0.3125
    ctx.drawImage(
      topImage,
      topImage.width / 2 - aspectWidth / 2,
      0,
      aspectWidth,
      topImage.height,
      deckWidth,
      0,
      deckWidth,
      canvasSize
    )
  }

  return canvas.toDataURL()
}
