import "./body.css";

function body() {
  return (
    <div className="body">
      <div>
        <h1>국내 숙소</h1>

        <div>
          <div className="info">
            <div className="info_div">
              <img
                src="src/assets/main/search.png"
                className="search_img"
              ></img>
              <span className="search_span">어디로 떠나시나요?</span>
            </div>
            <div className="info_div">
              <img
                src="src/assets/main/calendar.png"
                className="search_img"
              ></img>
              <span className="search_span">언제 떠나시나요?</span>
            </div>
            <div className="info_div">
              <img src="src/assets/main/user.png" className="search_img"></img>
              <span className="search_span_people">성인 2명</span>
            </div>
          </div>
          <div className="serch_button_div">
            <button className="serch_button">검색</button>
          </div>
        </div>

        <div className="ad">
          <div className="img_advertisement_div">
            <img
              className="img_advertisement"
              src="src/assets/main/advertisement.jpg"
            />
            <div className="number_span_div">
              <span id="number_span" className="number_span">
                1/4
              </span>
            </div>
            <div className="left_button_div">
              <button>
                <img src="src/assets/main/free-icon-left-arrow-271220.png" />
              </button>
            </div>
            <div className="right_button_div">
              <button>
                <img src="src/assets/main/free-icon-right-arrow-271228.png"></img>
              </button>
            </div>
          </div>
        </div>

        <div>
          <h4>마이리얼 트립 할인 이벤트</h4>
          <div>
            <div>
            </div>
            <div>
            </div>
            <div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default body;
