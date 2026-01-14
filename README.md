# Random Dog Image Fetcher

A React application that fetches and displays random dog images from the Dog CEO API. This project demonstrates fundamental React concepts including hooks, API integration, and event handling.

## Features

- Displays random dog images on page load
- Fetch new random dog images with a button click
- Loading state while fetching data
- Clean, simple user interface

## Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Dog CEO API** - Free API for random dog images
- **JavaScript (ES6+)** - Programming language

## Learning Objectives

This project demonstrates proficiency in:

- Using the `useEffect` hook for side effects
- Managing component state with `useState`
- Fetching data from external APIs
- Handling asynchronous operations
- Conditional rendering based on state
- Event handling in React

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Shobinn24/react-hooks-simple-data-fetching-lab-vite.git
cd react-hooks-simple-data-fetching-lab-vite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## Usage

- The app automatically loads a random dog image when first opened
- Click the "Load New Dog" button to fetch and display a new random dog image
- A "Loading..." message appears while fetching data from the API

## Testing

Run the test suite:
```bash
npm run test
```

## Code Highlights

### useEffect for Initial Data Fetch
```jsx
useEffect(() => {
  fetchDogImage();
}, []);
```
Fetches a dog image when the component mounts.

### Async Data Fetching
```jsx
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    setDogImage(data.message);
    setIsLoading(false);
  });
```
Retrieves random dog images from the API and updates state.

### Conditional Rendering
```jsx
{isLoading ? (
  <p>Loading...</p>
) : (
  <img src={dogImage} alt="A Random Dog" />
)}
```
Shows loading state until data is available.

## API Reference

**Endpoint:** `https://dog.ceo/api/breeds/image/random`

**Method:** GET

**Response:**
```json
{
  "message": "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "status": "success"
}
```

## Project Structure
```
├── src/
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── package.json         # Project dependencies
└── README.md           # Project documentation
```

## Future Enhancements

- Add ability to select specific dog breeds
- Implement image gallery to save favorite dogs
- Add error handling UI for failed API requests
- Include loading spinner animation
- Add share functionality for dog images

## Author

**Shobinn Clark** - Full-Stack Software Engineering Student at Flatiron School

## Acknowledgments
- Flatiron School for the lab assignment

