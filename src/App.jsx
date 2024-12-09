import { useState } from 'react'
import './App.css'
import { generateImage } from './service/apiService.js'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const imageUrl = await generateImage(inputValue)
      setImageUrl(imageUrl)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          AI Image Generator
        </h1>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Describe the image you want to generate..."
              className="flex-1 px-4 py-2 rounded-lg border-2 border-purple-300 focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold
                       hover:bg-purple-700 transition-colors duration-200
                       disabled:bg-purple-400 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Generating...
                </span>
              ) : (
                'Generate Image'
              )}
            </button>
          </div>
        </form>

        <div className="flex justify-center">
          {imageUrl && (
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src={imageUrl} 
                alt="Generated" 
                className="max-w-full rounded-lg"
                style={{ maxHeight: '600px' }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App

