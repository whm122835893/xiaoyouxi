import React, { useState } from 'react'
import HomePage from './pages/HomePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import GamePage from './pages/GamePage.jsx'
import WelfarePage from './pages/WelfarePage.jsx'
import RedeemPage from './pages/RedeemPage.jsx'

const PAGES = ['home', 'social', 'market', 'mine', 'game', 'redeem']

export default function App() {
  const [tab, setTab] = useState('home')

  // 中央手柄按钮进入游戏页，其余入口切换对应页面
  const handleChange = (key) => {
    if (PAGES.includes(key)) setTab(key)
  }

  return (
    // 铺满视口，无手机框、无外边距；窗口不滚动，底部导航栏始终可见
    <div className="h-screen w-full overflow-hidden bg-page">
      {tab === 'game' ? (
        <GamePage active={tab} onChange={handleChange} />
      ) : tab === 'redeem' ? (
        <RedeemPage active={tab} onChange={handleChange} />
      ) : tab === 'market' ? (
        <WelfarePage active={tab} onChange={handleChange} />
      ) : tab === 'mine' ? (
        <ProfilePage active={tab} onChange={handleChange} />
      ) : (
        <HomePage active={tab} onChange={handleChange} />
      )}
    </div>
  )
}