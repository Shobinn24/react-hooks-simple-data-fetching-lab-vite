import { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch dog image on component mount
  useEffect(() => {
    fetchDogImage();
  }, []);

  // Function to fetch a random dog image
  const fetchDogImage = () => {
    setIsLoading(true);
    
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
        setIsLoading(false);
      });
  };

  // Handle button click
  const handleClick = () => {
    fetchDogImage();
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
      <button onClick={handleClick}>Load New Dog</button>
    </div>
  );
}

export default App;
