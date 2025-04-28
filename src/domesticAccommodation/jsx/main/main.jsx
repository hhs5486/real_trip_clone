import "../../css/main/main.css";
import Header from "../header/header.jsx";
import Ad from "./ad.jsx";
import Event from "./event.jsx";
import Search from "./search.jsx";

function main() {
  return (
    <>
      <Header />
      <div className="body">
        <h1>국내 숙소</h1>
        <Search />

        <Ad />
        
        <h4>마이리얼 트립 할인 이벤트</h4>
        <Event />
      </div>
    </>
  );
}

export default main;
