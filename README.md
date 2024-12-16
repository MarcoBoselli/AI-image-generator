A React-based web application that generates images from text descriptions using the Hugging Face Inference API. Users can input text descriptions, and the application will generate corresponding images using AI.

Technologies Used

- React 18
- Vite
- Tailwind CSS
- Hugging Face Inference API
- JavaScript

---------------------------------------------------------
Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- A Hugging Face account and API token

Installation

1. Clone the repository:
   git clone https://github.com/your-username/ai-image-generator.git

2. Navigate to the project directory:
   cd ai-image-generator


3. Install dependencies:
    npm install


4. Create a `.env` file in the root directory:
   cp .env.example .env


5. Add your Hugging Face API token to the `.env` file:
   API_TOKEN=your_token_here

6. Start the development server:
   npm run dev

7. Open your browser and navigate to `http://localhost:5173`

8. Enter a text description in the input field and click "Generate Image"

-----How to Get Your Hugging Face API Token

1. Go to [Hugging Face](https://huggingface.co/)
2. Create an account or sign in
3. Navigate to Settings > Access Tokens
4. Create a new token with read access
5. Copy the token and paste it in your `.env` file
