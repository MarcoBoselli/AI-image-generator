const API_URL = 'https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell'
const API_TOKEN = import.meta.env.VITE_HUGGING_FACE_API_TOKEN

export const generateImage = async (prompt) => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ inputs: prompt }),
    })
    const blob = await response.blob()
    return URL.createObjectURL(blob)
  } catch (error) {
    console.error('Error generating image:', error)
    throw error
  }
}