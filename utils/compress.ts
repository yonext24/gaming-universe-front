import Compressor from 'compressorjs'

export async function getImageDimensionsFromFile(file: File): Promise<{ width: number; height: number; url: string }> {
  return await new Promise((resolve, reject) => {
    const image = new Image()
    const reader = new FileReader()

    reader.onload = function (e) {
      const result = e.target?.result

      if (typeof result === 'string' && result !== null) {
        image.onload = function () {
          resolve({
            width: image.width,
            height: image.height,
            url: result
          })
        }

        image.src = result
      } else {
        reject(new Error('Error al leer la imagen'))
      }
    }

    reader.readAsDataURL(file)
  })
}

export const CompressImage = async (
  file: File,
  options: { height?: number; quality?: number; width?: number; fillStyle?: string }
): Promise<File> => {
  console.log({ file })
  const { fillStyle = 'transparent', quality = 0.8, width = 1200, height = 630 } = options
  return await new Promise((resolve, reject) => {
    // eslint-disable-next-line no-new
    new Compressor(file, {
      quality,
      height,
      width,
      resize: 'contain',

      beforeDraw(context, canvas) {
        context.fillStyle = fillStyle
        context.fillRect(0, 0, canvas.width, canvas.height)
      },

      success(result) {
        resolve(result as File)
      },

      error(err) {
        reject(err)
      }
    })
  })
}
