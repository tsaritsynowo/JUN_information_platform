import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";

function Headernav() {
  let nowurl = window.location.pathname.split("/")[1];
  if (nowurl == undefined) {
    nowurl = "home";
  };

  const [active, setActive] = useState(nowurl);

  function handleClick({ target }) {
    setActive(target.id);
  };

  return (
    <ul>
      <Link to="/"><li id="home" onClick={handleClick} className={(active === "home")? "selected" : "" }>首页</li></Link>
      <Link to="/news"><li id="news" onClick={handleClick}className={(active === "news")? "selected" : ""}>活动信息</li></Link>
      <Link to="/course"><li id="course" onClick={handleClick} className={(active === "course")? "selected" : ""}>课程评价</li></Link>
      <Link to="/market"><li id="market" onClick={handleClick} className={(active === "market")? "selected" : ""}>二手市场</li></Link>
      <Link to="/login"><li id="login">登录</li></Link>
    </ul>
  );
}

function Header() {
  const [logoBoxstatus, setlogoBoxstatus] = useState("logoBoxopen");
  const [headerBoxstatus, setheaderBoxstatus] = useState("headerBoxopen");
  const [headerstatus, setheaderstatus] = useState("headeropen");
  const [navstatus, setnavstatus] = useState("navopen");

  useEffect(() => {
    function scorllLinstener() {
      if (window.scrollY > 10) {
        setlogoBoxstatus("logoBoxdown");
        setheaderBoxstatus("headerBoxdown");
        setheaderstatus("headerdown");
        setnavstatus("navdown");
        } else {
          setlogoBoxstatus("logoBoxopen");
          setheaderBoxstatus("headerBoxopen");
          setheaderstatus("headeropen");
          setnavstatus("navopen");
        }
      }
      window.addEventListener("scroll", scorllLinstener);
      return () => window.removeEventListener("scroll", scorllLinstener);
    }, []);

  return (
    <header id={headerstatus}>
      <div className="headerBox" id={headerBoxstatus}>
        <div className="logoBox" id={logoBoxstatus}>
          <h1>暨刻Know</h1>
          <p>暨南大学学生信息共享平台</p>
        </div>
        <nav id={navstatus}>
          <Headernav />
        </nav>
      </div>
    </header>
  );
 };

export default function main() {
    return (
      <body>
        <Header/>
        <div className="mainBox">
          <Outlet />
        </div>
      </body>
    )
  };