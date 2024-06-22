import Aside from "../../components/aside";
import '../../css/NewApp.css';
function NewApp() {
    return (
      <main>
        <Aside />
        <div className="NewApp-container">
 
    <div className="doctor-search-container">
      <h1>Search for a Doctor</h1>
      <p>Find ,search and book appointments with top healthcare professionals.</p>
      <div className="search-area">
        <input
          type="text"
         placeholder="Enter doctor's name"
          className="search-input"
        />
        <button className="search-button">
          Search
        </button>
      </div>
      <p>
        Can't find your doctor? <a href="/explore" className="explore-link">Explore more options</a>
      </p>
    </div>
    </div>
  </main>
   );
  }

  export default NewApp;
  