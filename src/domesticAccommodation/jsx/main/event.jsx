import "../../css/main/event.css";

function event() {
  return (
    <div className="event_div_main">
      <div className="event_div">
      <div className="left_button_div">
          <button>
            <img src="src/domesticAccommodation/assets/main/free-icon-left-arrow-271220.png" />
          </button>
        </div>
        <div className="right_button_div">
          <button>
            <img src="src/domesticAccommodation/assets/main/free-icon-right-arrow-271228.png"></img>
          </button>
        </div>

        <div className="event_inf">
          <img src="src/domesticAccommodation/assets/main/event_test.jpg"></img>
          <h5>소도 브랜드 워크 최대 80% 할인 진행</h5>
        </div>

      </div>
    </div>
  );
}

export default event;
