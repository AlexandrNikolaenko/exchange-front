'use client'

import { useState } from "react";

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  function handleChangeVisible() {
    setIsOpen(!isOpen);
  }

  return (
    <li className={`info-list-item ${isOpen ? 'active' : ''}`}>
      <div className={`list-header ${isOpen ? 'active' : ''}`}>
          <span>Термины и определения</span>
          <button onClick={handleChangeVisible}>
            <svg className="list-arrow" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="29" y="29" width="28" height="28" rx="14" transform="rotate(-180 29 29)" stroke="#482BE7" strokeWidth="2"/>
              <path d="M20.9544 11.4048C21.17 10.8486 20.5849 10.3366 19.9687 10.5492C18.4891 11.0597 17.0217 11.6806 16.3487 11.9734C16.0708 12.0944 15.8589 12.3074 15.7521 12.5653L15 14.3823L14.2479 12.5653C14.1411 12.3074 13.9292 12.0944 13.6512 11.9734C12.9783 11.6806 11.5109 11.0597 10.0313 10.5492C9.41516 10.3366 8.83004 10.8486 9.04562 11.4048C9.76997 13.2738 11.481 17.2166 14.1652 20.6109C14.5755 21.1297 15.4245 21.1297 15.8348 20.6109C18.519 17.2166 20.23 13.2738 20.9544 11.4048Z" fill="#482BE7"/>
            </svg>
          </button>
      </div>
      <ol className={`info-list-sub ${isOpen ? '' : 'hide'} `}>
          <li>
              <span> Azazex (&quot;Сервис&quot;)</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem iure, nisi qui sed quo blanditiis possimus fugiat laborum iusto, quisquam magnam praesentium quasi error dignissimos.</p>
          </li>
          <li>
              <span> Azazex (&quot;Сервис&quot;)</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem iure, nisi qui sed quo blanditiis possimus fugiat laborum iusto, quisquam magnam praesentium quasi error dignissimos.</p>
          </li>
          <li>
              <span> Azazex (&quot;Сервис&quot;)</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem iure, nisi qui sed quo blanditiis possimus fugiat laborum iusto, quisquam magnam praesentium quasi error dignissimos.</p>
          </li>
      </ol>
  </li>
  );
}
