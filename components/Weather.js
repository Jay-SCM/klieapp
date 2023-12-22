// Weather.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from '../styles/Weather.module.css';
//
// const Weather = () => {
//     const [city, setCity] = useState('');
//     const [weatherData, setWeatherData] = useState(null);
//
//     const getWeatherData = async () => {
//         try {
//             const apiKey = 'a16b4275e7f9c699970970348e3b1f9c';
//             const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//             const response = await axios.get(apiUrl);
//             setWeatherData(response.data);
//         } catch (error) {
//             console.error('Error fetching weather data:', error);
//         }
//     };
//
//     return (
//         <div className={styles.cardContainer}>
//             <h1>Kliea-Weather-App</h1>
//             <input
//                 type="text"
//                 placeholder="Enter city"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//             />
//             <button onClick={getWeatherData}>WeatherFucker</button>
//             {weatherData && (
//                 <div className={styles.weatherCard}>
//                     <h2>{weatherData.name}, {weatherData.sys.country}</h2>
//                     <p>Temperature: {weatherData.main.temp}°C</p>
//                     <p>Weather: {weatherData.weather[0].description}</p>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Weather;


// Weather.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from '../styles/Weather.module.css';
//
// const Weather = () => {
//     const [city, setCity] = useState('');
//     const [weatherData, setWeatherData] = useState(null);
//
//     const getWeatherData = async () => {
//         try {
//             const apiKey = 'a16b4275e7f9c699970970348e3b1f9c';
//             const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//             const response = await axios.get(apiUrl);
//             setWeatherData(response.data);
//         } catch (error) {
//             console.error('Error fetching weather data:', error);
//         }
//     };
//
//     return (
//         <div className={styles.cardContainer}>
//             <h1>Kliea-Weather-App</h1>
//             <div className={styles.inputContainer}>
//                 <input
//                     type="text"
//                     placeholder="Enter city"
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                 />
//                 <button onClick={getWeatherData}>WeatherFucker</button>
//             </div>
//             {weatherData && (
//                 <div className={styles.weatherCard}>
//                     <h2>{weatherData.name}, {weatherData.sys.country}</h2>
//                     <p>Temperature: {weatherData.main.temp}°C</p>
//                     <p>Weather: {weatherData.weather[0].description}</p>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Weather;

// Weather.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from '../styles/Weather.module.css';
//
// const Weather = () => {
//     const [city, setCity] = useState('');
//     const [weatherData, setWeatherData] = useState(null);
//
//     const getWeatherData = async () => {
//         try {
//             const apiKey = 'a16b4275e7f9c699970970348e3b1f9c';
//             const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//             const response = await axios.get(apiUrl);
//             setWeatherData(response.data);
//         } catch (error) {
//             console.error('Error fetching weather data:', error);
//         }
//     };
//
//     return (
//         <div className={styles.cardContainer}>
//             <h1>Kliea-Weather-App</h1>
//             <div className={styles.inputContainer}>
//                 <input
//                     type="text"
//                     placeholder="Enter city"
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                     className={styles.searchInput}
//                 />
//                 <button onClick={getWeatherData} className={styles.searchButton}>
//                     Get Weather
//                 </button>
//             </div>
//             {weatherData && (
//                 <div className={styles.weatherCard}>
//                     <h2>{weatherData.name}, {weatherData.sys.country}</h2>
//                     <p>Temperature: {weatherData.main.temp}°C</p>
//                     <p>Weather: {weatherData.weather[0].description}</p>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Weather;


// Weather.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from '../styles/Weather.module.css';
//
// const Weather = () => {
//     const [city, setCity] = useState('');
//     const [weatherData, setWeatherData] = useState(null);
//
//     const getWeatherData = async () => {
//         try {
//             const apiKey = 'a16b4275e7f9c699970970348e3b1f9c';
//             const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//             const response = await axios.get(apiUrl);
//             setWeatherData(response.data);
//         } catch (error) {
//             console.error('Error fetching weather data:', error);
//         }
//     };
//
//     return (
//         <div className={styles.cardContainer}>
//             {/* Add a class to the h1 element */}
//             <h1 className={styles.heading}>Kliea-Weather-App</h1>
//             <div className={styles.inputContainer}>
//                 <input
//                     type="text"
//                     placeholder="Enter city"
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                     className={styles.searchInput}
//                 />
//                 <button onClick={getWeatherData} className={styles.searchButton}>
//                     Get Weather
//                 </button>
//             </div>
//             {weatherData && (
//                 <div className={styles.weatherCard}>
//                     <h2>{weatherData.name}, {weatherData.sys.country}</h2>
//                     <p>Temperature: {weatherData.main.temp}°C</p>
//                     <p>Weather: {weatherData.weather[0].description}</p>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Weather;


// Weather.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from '../styles/Weather.module.css';
//
// const Weather = () => {
//     const [city, setCity] = useState('');
//     const [weatherData, setWeatherData] = useState(null);
//
//     const getWeatherData = async () => {
//         try {
//             const apiKey = 'a16b4275e7f9c699970970348e3b1f9c';
//             const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//             const response = await axios.get(apiUrl);
//             setWeatherData(response.data);
//         } catch (error) {
//             console.error('Error fetching weather data:', error);
//         }
//     };
//
//     return (
//         <div className={styles.cardContainer}>
//             <h1 className={styles.heading}>Kliea-Weather-App</h1>
//             <div className={styles.inputContainer}>
//                 <input
//                     type="text"
//                     placeholder="Enter city"
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                     className={styles.searchInput}
//                 />
//                 <button onClick={getWeatherData} className={styles.searchButton}>
//                     Get Weather
//                 </button>
//             </div>
//             {weatherData && (
//                 <div className={styles.weatherCard}>
//                     {/* Add a class to the h2 element */}
//                     <h2 className={styles.weatherTitle}>{weatherData.name}, {weatherData.sys.country}</h2>
//                     <p>Temperature: {weatherData.main.temp}°C</p>
//                     <p>Weather: {weatherData.weather[0].description}</p>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Weather;

// Weather.js
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Weather.module.css';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const getWeatherData = async () => {
        try {
            const apiKey = 'a16b4275e7f9c699970970348e3b1f9c';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            const response = await axios.get(apiUrl);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div className={styles.cardContainer}>
            <h1 className={styles.heading}>Kliea-Weather-App</h1>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={styles.searchInput}
                />
                <button onClick={getWeatherData} className={styles.searchButton}>
                    Get Weather
                </button>
            </div>
            {weatherData && (
                <div className={styles.weatherCard}>
                    <h2 className={styles.weatherTitle}>{weatherData.name}, {weatherData.sys.country}</h2>
                    <p className={styles.weatherText}>Temperature: {weatherData.main.temp}°C</p>
                    <p className={styles.weatherText}>Weather: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
