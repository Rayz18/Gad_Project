import "../styles/NavigationBar.css"; // Make sure the CSS path is correct

function NavigationBar() {
  return (
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
  );
}

export default NavigationBar;