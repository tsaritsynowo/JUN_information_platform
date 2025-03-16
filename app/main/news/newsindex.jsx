import { useState } from 'react';
import competitionlist from '../../../public/file/competitionlist.json';

// 以下是侧栏标签组件

function Lable() {
  return (
    <div className="label">标签</div>
  );
}

// 以下是主体比赛卡片组件

function Competition({id, name, description, start_date, end_date, level, labeles, content, date, exist}) {
  function openarticle({target}){
    window.open(`${window.location.href}/${target.id}`,'_blank')
  };

  if (labeles === undefined) {
    labeles = [];
  } 

  const labelesHTML = labeles.map((label, index) => {
    return (
      <div key={index} className="labelstyle2">{label}</div>
    );
  });

  if (exist) {
    return (
      <>
        <div className="competition" id={id} onClick={openarticle}>
          <h2 id={id}>{name}</h2>
          <samp id={id} className='labelstyle2'>{start_date}至{end_date}</samp>
          {labelesHTML}
          <p id={id}>{description}</p>
        </div>
        <hr width="30%" />
      </>
    );
    } else {
      return (<></>); };
  };

  // 以下是侧栏导航框

function AsideNav() {
  const [status, setStatus] = useState("competition");
  
  function handleClick({ target }) {
    setStatus(target.id);
  };

  return (
      <ul>
        <li id="competition" onClick={handleClick} className={(status === "competition")? "asideNavselected" : ""}>比赛信息</li>
        <li id="schoolNews" onClick={handleClick} className={(status === "schoolNews")? "asideNavselected" : ""}>学校新闻</li>
      </ul>
      );
}

// 以下是侧栏搜索框

function Search() {
  return (
    <div className='search'>
        <input type="text" placeholder="搜索..." />
        <input type="button" />
    </div>
  );
  }

  // 以下是侧栏标签筛选框

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

  // 以下是侧栏总体

function Aside() {
  return (
    <aside className="aside">
      <div>
        <Search />
        <AsideNav />
        <Fliter />
      </div>
    </aside>
    );
}

// 以下是页面主体，包括侧栏与正栏

export default function Container() {
  return (
  <>
    <Aside />
    <div className="articleContainer">
      <div>
        <Competition {...competitionlist[0]} />
        <Competition {...competitionlist[1]} />
        <Competition {...competitionlist[2]} />
        <Competition {...competitionlist[3]} />
        <Competition {...competitionlist[4]} />
        <Competition {...competitionlist[5]} />
        <Competition {...competitionlist[6]} />
        <Competition {...competitionlist[7]} />
        <Competition {...competitionlist[8]} />
        <Competition {...competitionlist[9]} />
      </div>
    </div>
  </>
  );
};