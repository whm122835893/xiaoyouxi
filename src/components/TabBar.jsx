import React from 'react'
import { DogIcon, JellyIcon, GiftTabIcon, RobotIcon, GamepadTabIcon } from './icons.jsx'

const ACTIVE = '#D5E733'
const INACTIVE = '#C7C7C7'

const LEFT = [
  { key: 'home', label: '首页', Icon: DogIcon },
  { key: 'social', label: '社交', Icon: JellyIcon },
]
const RIGHT = [
  { key: 'market', label: '福利活动', Icon: GiftTabIcon },
  { key: 'mine', label: '我的', Icon: RobotIcon },
]

function TabItem({ item, active, onChange }) {
  const on = active === item.key
  const color = on ? ACTIVE : INACTIVE
  const { Icon, label, key } = item
  return (
    <button
      type="button"
      onClick={() => onChange(key)}
      className="pointer-events-auto flex h-full flex-col items-center justify-center gap-[3px]"
      style={{ color }}
    >
      <Icon size={26} />
      <span className="text-[11px] font-semibold leading-none" style={{ color }}>
        {label}
      </span>
    </button>
  )
}

/**
 * 底部 TabBar（两页共用）—— 悬浮吸底
 * 五入口：首页 / 社交 / [中央游戏手柄] / 福利活动 / 我的
 */
export default function TabBar({ active = 'home', onChange = () => {} }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30">
      <div className="relative mx-3 mb-3">
        {/* 白色胶囊本体 */}
        <div className="relative h-[60px] rounded-[30px] border-[2px] border-ink bg-white">
          <div className="grid h-full grid-cols-5">
            {LEFT.map((it) => (
              <TabItem key={it.key} item={it} active={active} onChange={onChange} />
            ))}
            <div aria-hidden="true" />
            {RIGHT.map((it) => (
              <TabItem key={it.key} item={it} active={active} onChange={onChange} />
            ))}
          </div>
        </div>

        {/* 白色挖空环：盖住按钮穿过处的描边 */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[68px] w-[68px] -translate-x-1/2 -translate-y-[22px] rounded-full bg-white" />

        {/* 中央游戏手柄按钮：56pt，向上凸出 16pt，点击进入游戏页 */}
        <button
          type="button"
          aria-label="谷灵游乐场"
          onClick={() => onChange('game')}
          className={`pointer-events-auto absolute left-1/2 top-0 flex h-[56px] w-[56px] -translate-x-1/2 -translate-y-[16px] items-center justify-center rounded-full border-[3px] border-ink text-ink ${
            active === 'game' ? 'bg-lime-deep' : 'bg-lime'
          }`}
        >
          <GamepadTabIcon size={28} />
        </button>
      </div>
    </div>
  )
}