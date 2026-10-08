import React, { useState } from 'react'
import HomePage from './pages/HomePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import GamePage from './pages/GamePage.jsx'
import WelfarePage from './pages/WelfarePage.jsx'
import RedeemPage from './pages/RedeemPage.jsx'
import StatsPage from './pages/StatsPage.jsx'
import EditProfilePage from './pages/EditProfilePage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import { DEFAULT_AVATAR, DEFAULT_NICKNAME, DEFAULT_SIGNATURE } from './components/avatar.jsx'

const PAGES = [
  'home',
  'social',
  'market',
  'mine',
  'game',
  'redeem',
  'mygames',
  'prizebag',
  'playtime',
  'editprofile',
  'settings',
]

/* 「我的」下的三个数据子页面共用 StatsPage */
const STAT_PAGES = ['mygames', 'prizebag', 'playtime']

export default function App() {
  const [tab, setTab] = useState('home')
  // 昵称、头像、个性签名提升到此处，「个人信息」页改完能同步回「我的」页
  const [profile, setProfile] = useState({
    nickname: DEFAULT_NICKNAME,
    avatar: DEFAULT_AVATAR,
    signature: DEFAULT_SIGNATURE,
  })
  // 设置项同样提升，离开设置页再回来开关状态不丢失
  const [settings, setSettings] = useState({ notify: true, sfx: true, bgm: false })

  // 中央手柄按钮进入游戏页，其余入口切换对应页面
  const handleChange = (key) => {
    if (PAGES.includes(key)) setTab(key)
  }

  const toggleSetting = (key) => setSettings((s) => ({ ...s, [key]: !s[key] }))

  const renderPage = () => {
    if (tab === 'game') return <GamePage active={tab} onChange={handleChange} />
    if (tab === 'redeem') return <RedeemPage active={tab} onChange={handleChange} />
    if (STAT_PAGES.includes(tab)) return <StatsPage mode={tab} onChange={handleChange} />
    if (tab === 'editprofile') {
      return <EditProfilePage profile={profile} onSave={setProfile} onChange={handleChange} />
    }
    if (tab === 'settings') {
      return <SettingsPage settings={settings} onToggle={toggleSetting} onChange={handleChange} />
    }
    if (tab === 'market') return <WelfarePage active={tab} onChange={handleChange} />
    if (tab === 'mine') return <ProfilePage active={tab} onChange={handleChange} profile={profile} />
    return <HomePage active={tab} onChange={handleChange} />
  }

  return (
    // 铺满视口，无手机框、无外边距；窗口不滚动，底部导航栏始终可见
    <div className="h-screen w-full overflow-hidden bg-page">{renderPage()}</div>
  )
}