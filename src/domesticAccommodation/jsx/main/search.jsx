import "../../css/main/search.css"

function search() {
  return (
    <div>
      <div className="info">
        <div className="info_div">
          <img
            src="src/domesticAccommodation/assets/main/search.png"
            className="search_img"
          ></img>
          <span className="search_span">어디로 떠나시나요?</span>
        </div>
        <div className="info_div">
          <img
            src="src/domesticAccommodation/assets/main/calendar.png"
            className="search_img"
          ></img>
          <span className="search_span">언제 떠나시나요?</span>
        </div>
        <div className="info_div">
          <img
            src="src/domesticAccommodation/assets/main/user.png"
            className="search_img"
          ></img>
          <span className="search_span_people">성인 2명</span>
        </div>
      </div>
      <div className="serch_button_div">
        <button className="serch_button">검색</button>
      </div>
    </div>
  );
}
export default search;
