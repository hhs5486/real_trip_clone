import "../../css/header/header.css";

function header() {
  return (
    <header className="header">
      <nav className="header_nav_top">
        <div>
          <a type="button" href="홈으로">
            <img
              src="src/domesticAccommodation/assets/header/logo_mrt_v2_web.png"
              className="header_img"
            ></img>
          </a>
        </div>
        <div className="header_search_div">
          <input
            placeholder="도시나 상품을 검색해보세요"
            className="header_search_input"
          ></input>
          <div className="header_search_img_div">
            <img
              src="src/domesticAccommodation/assets/header/ic_search_20x20_gray_500.png"
              className="header_search_img"
            ></img>
          </div>
        </div>
        <div className="header_button_div">
          <div className="button_div_detail">
            <button className="header_button_login">파트너 로그인</button>
          </div>
          <div className="button_div_detail">
            <button className="header_button_join">로그인 및 회원가입</button>
          </div>
        </div>
      </nav>
      <nav className="header_nav_bottom">
        <div className="header_nav_bottom_div">
          <a>홈</a>
        </div>
        <div className="header_nav_bottom_div">
          <a>항공</a>
        </div>
        <div className="header_nav_bottom_div">
          <a>해외 숙소</a>
        </div>
        <div className="header_nav_bottom_div">
          <a>국내 숙소</a>
          <span></span>
        </div>
        <div className="header_nav_bottom_div">
          <a>투어·티켓</a>
        </div>
        <div className="header_nav_bottom_div">
          <a>한인민박</a>
        </div>
        <div className="header_nav_bottom_div">
          <a>해외 골프</a>
        </div>
        <div className="header_nav_bottom_div">
          <a>여행자 보험</a>
        </div>
        <div className="header_nav_bottom_div">
          <a>크루즈·페리</a>
        </div>
        <div className="header_nav_bottom_div">
          <button className="header_nav_bottom_button">
            <span>더보기</span>
            <img className= "bottom_button_img" src="src/domesticAccommodation/assets/header/ic_arrow_down_md_gray_700.svg"></img>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default header;
