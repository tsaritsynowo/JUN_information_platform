import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";

function Header() {
  const [status, setStatus] = useState("open");

  useEffect(() => {
    function scorllLinstener() {
      if (window.scrollY > 10) {
        setStatus("hidden");
        } else {
          setStatus("open");
        }
      }
      window.addEventListener("scroll", scorllLinstener);
      return () => window.removeEventListener("scroll", scorllLinstener);
    }, []);

  return (
    <header className={status}>
      <ul>
        <Link to="/"><li id="home">首页</li></Link>
        <Link to="/news"><li id="news">新闻</li></Link>
        <Link to="/market"><li id="market">交易</li></Link>
        <Link to="/"><li id="#">功能四</li></Link>
        <Link to="/login"><li id="login">登录</li></Link>
      </ul>
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