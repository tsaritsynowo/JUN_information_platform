import { useEffect, useState } from "react";

function Goods() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1450) {
        setStatus("goodsSmall");
      } else {
        setStatus("goodsLarge");
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      handleResize();
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <li className={status} id="" onClick={({ target }) => {
      window.open(`${window.location.href}/${target.id}`, "_blank");
    }}>
      <img src="" alt="" id=""/>
      <h3 id="">商品名</h3>
      <div id="">商品价格/买过</div>
      <div id="">卖家</div>
    </li>
  );
}

function Aside() {
  const [status, setStatus] = useState("secondhand");

  function handleClick({ target }) {
    setStatus(target.id);
  };
  
  return (
    <aside className="aside">
      <ul>
        <li id="secondhand" onClick={handleClick} className={(status === "secondhand")? "selected" : ""}>二手</li>
        <li id="help" onClick={handleClick} className={(status === "help")? "selected" : ""}>跑腿</li>
        <li id="course" onClick={handleClick} className={(status === "course")? "selected" : ""}>代课</li>
      </ul>
    </aside>
    );
}

export default function MarketIndex() {
  return ( 
    <>
      <Aside />
      <div className="goodsContainer">
        <ul>
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
        </ul>
      </div>
    </>
  );
}