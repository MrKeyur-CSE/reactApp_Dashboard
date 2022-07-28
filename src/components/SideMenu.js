import React from 'react'
import { SidebarData } from './SidebarData'

function SideMenu() {
  return (
    <div className="Sidebar mt-3 pd-4">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li key={key} role="button" className="justify-content-center justify-content-md-start" style={{ fontWeight: '700', minHeight: '48px' }} onClick={() => { window.location.pathname = val.link }}>
              {""}
              <div>{val.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideMenu
