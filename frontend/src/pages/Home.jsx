import Slider from "../components/Slider";
import "../styles/Home.css"; // Update this file accordingly

const Home = () => {
    const images = [
        "/assets/photos/A.jpg",
        "/assets/photos/B.jpg",
        "/assets/photos/C.jpg"
    ];

    return (
        <div className="home-container">
            <nav className="navigation-bar">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about-us">ABOUT US</a></li>
                    <li><a href="/events">EVENTS</a></li>
                    <li><a href="/video-archives">VIDEO ARCHIVES</a></li>
                    <li><a href="/assessment">ASSESSMENT</a></li>
                    <li><a href="/connect-with-us">CONNECT WITH US</a></li>
                </ul>
            </nav>
            <Slider images={images} />
        </div>
    );
};

export default Home;