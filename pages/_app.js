// pages/_app.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

// Custom App component that wraps all pages
function MyApp({ Component, pageProps }) {
    return (
        // Main container for the entire application
        <div>
            {/* Navigation bar component rendered at the top of each page */}
            <Navbar />
            {/* Rendering the main content of the current page */}
            <Component {...pageProps} />
            {/* Footer component rendered at the bottom of each page */}
            <Footer />
        </div>
    );
}

// Exporting the custom App component as the default export
export default MyApp;
