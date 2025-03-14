import { useState } from 'react';
import filelist from '../../../public/file/filelist.json';

function Article({id, title, content, date, exist, author}) {
  function openarticle({target}){
    console.log(target)
    window.open(`${window.location.href}/${target.id}`,'_blank')
  };

  if (exist) {
    return (
      <div className="article" id={id} onClick={openarticle}>
        <h2 id={id}>{title}</h2>
        <samp id={id}>{author}{date}</samp>
        <p id={id}>{content}</p>
      </div>
    );
    } else {
      return (<></>); };
  };

function Aside() {
  const [status, setStatus] = useState("1");
  
  function handleClick({ target }) {
    setStatus(target.id);
  };

  return (
    <aside className="aside">
      <ul>
        <li id="1" onClick={handleClick} className={(status === "1")? "selected" : ""}>1</li>
        <li id="2" onClick={handleClick} className={(status === "2")? "selected" : ""}>2</li>
        <li id="3" onClick={handleClick} className={(status === "3")? "selected" : ""}>3</li>
      </ul>
    </aside>
    );
}

export default function Container() {
  return (
  <>
    <Aside />
    <div className="articleContainer">
      <Article {...filelist[0]} />
      <Article {...filelist[1]} />
      <Article {...filelist[2]} />
      <Article {...filelist[3]} />
      <Article {...filelist[4]} />
      <Article {...filelist[5]} />
      <Article {...filelist[6]} />
      <Article {...filelist[7]} />
      <Article {...filelist[8]} />
      <Article {...filelist[9]} />
    </div>
  </>
  );
};