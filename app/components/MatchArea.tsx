import { NavLink, Outlet } from "react-router"
import { playerList, GetPlayerImg } from "../utils/ToolBox"
import { useTranslation } from 'react-i18next'

import "../css/mtachArea.css"

export default function MatchArea() {
  const { t } = useTranslation();
  return (
    <div className='matchArea-container'>
      <hgroup className="matchArea-hgroup">
        {playerList.map(
          (player) => (
            <NavLink className={({ isActive, isPending }) =>
              isPending ? "baseNavLink"
                : isActive ? "baseNavLink-active baseNavLink"
                  : "baseNavLink"
            }
              key={player}
              to={`/${player}`}>
              {GetPlayerImg(player) ? <img className='avatar-img' src={GetPlayerImg(player)} /> : ""}
              <span>{t(`${player}`)}</span>
            </NavLink>
          ))
        }
      </hgroup>
      <Outlet />
    </div>
  )
}