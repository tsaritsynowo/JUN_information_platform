import { useState } from 'react';
import competitionlist from '../../../public/file/competitionlist.json';

function Lable() {
  return (
    <div className="label">标签</div>
  );
}

function Competition({id, name, description, start_date, end_date, level, labeles, content, date, exist}) {
  function openarticle({target}){
    window.open(`${window.location.href}/${target.id}`,'_blank')
  };
  
  if (labeles === undefined) {
    labeles = [];
  } 

  const labelesHTML = labeles.map((label, index) => {
    return (
      <div key={index} className="label">{label}</div>
    );
  });

  if (exist) {
    return (
      <>
        <div className="competition" id={id} onClick={openarticle}>
          <h2 id={id}>{name}</h2>
          <samp id={id}>{start_date}至{end_date}</samp>
          {labelesHTML}
          <p id={id}>{description}</p>
        </div>
        <hr width="30%" />
      </>
    );
    } else {
      return (<></>); };
  };

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
        <AsideNav />
        <Fliter />
      </div>
    </aside>
    );
}

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