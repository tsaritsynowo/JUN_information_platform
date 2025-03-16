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

function Lable() {
  return (
    <div className="label">标签</div>
  );
}

function Search() {
  return (
    <div className='search'>
        <input type="text" placeholder="搜索..." />
        <input type="button" />
    </div>
  );
  }

function Fliter() {
  return (
      <div className="fliter">
        <h2>筛选</h2>
        <div className="labelBox">
          <Lable />
        </div>
      </div>
  );
  }

function Aside() {
  return (
    <aside className="aside">
      <div>
        <Search />
        <Fliter />
      </div>
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