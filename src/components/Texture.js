const { createCanvas, loadImage } = require("canvas")

const size = 2048

export const wrap = async (top, bottom) => {
  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext("2d")

  if (top) {
    const topImage = await loadImage(top)
    ctx.drawImage(topImage, 256 + 768, 0, 768, size)
  }

  if (bottom) {
    const bottomImage = await loadImage(bottom)
    const aspect = bottomImage.height * 0.375
    console.log(aspect)

    ctx.drawImage(
      bottomImage,
      bottomImage.width / 2 - aspect / 2,
      0,
      aspect,
      bottomImage.height,
      256,
      0,
      768,
      size
    )
    // ctx.drawImage(bottomImage, 256, 0, 768, size)
  }

  return canvas.toDataURL()
}
