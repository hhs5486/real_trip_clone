import "../../css/main/ad.css";

function ad() {

  function onMouseEnter() {
    document.getElementById("button_div").style .visibility = "visible"
  }
  
  function onMouseOver() {
    document.getElementById("button_div").style.visibility = "hidden"
  }

  return (
    <div className="ad">
      <div className="img_advertisement_div" onMouseLeave={onMouseOver} onMouseOver={onMouseEnter}>
        <img
          className="img_advertisement"
          src="src/domesticAccommodation/assets/main/advertisement.jpg"
        />
        <div className="number_span_div">
          <span id="number_span" className="number_span">
            1/4
          </span>
        </div>
        <div id="button_div" style={{visibility: "hidden"}}>
          <div className="left_button_div" >
            <button>
              <img src="src/domesticAccommodation/assets/main/free-icon-left-arrow-271220.png" />
            </button>
          </div>
          <div className="right_button_div">
            <button>
              <img src="src/domesticAccommodation/assets/main/free-icon-right-arrow-271228.png"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ad;
