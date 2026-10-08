import React, { useState } from 'react'
import TabBar from '../components/TabBar.jsx'
import WechatCapsule from '../components/WechatCapsule.jsx'

/* ================================================================
   「我的」子页面：设置
   开关状态提升到 App，切换后离开再回来仍然保留
   ================================================================ */

const TOGGLES = [
  { key: 'notify', name: '消息通知', desc: '奖品到账、活动开始时提醒我' },
  { key: 'sfx', name: '游戏音效', desc: '游乐场内点击与得分音效' },
  { key: 'bgm', name: '背景音乐', desc: '进入页面自动播放背景乐' },
]

function Switch({ on, onToggle, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onToggle}
      className={`tap relative h-[26px] w-[46px] shrink-0 rounded-full border-[2px] border-ink transition-colors ${
        on ? 'bg-lime' : 'bg-[#E4E4E4]'
      }`}
    >
      <span
        className={`absolute top-[2px] h-[18px] w-[18px] rounded-full border-[2px] border-ink bg-white transition-all ${
          on ? 'left-[22px]' : 'left-[2px]'
        }`}
      />
    </button>
  )
}

export default function SettingsPage({ settings, onToggle, onChange }) {
  const [cache, setCache] = useState('12.6 MB')

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-page">
      <div className="no-bar flex-1 overflow-y-auto">
        <div className="relative overflow-hidden">
          {/* 顶部渐变（不铺小点） */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-lime-top via-[#E2EFA6] to-page" />

          {/* 返回 + 标题 + 微信胶囊 */}
          <div className="relative flex h-[88px] items-center justify-center">
            <button
              type="button"
              aria-label="返回"
              onClick={() => onChange('mine')}
              className="tap absolute left-3 top-[16px] flex h-[32px] w-[32px] items-center justify-center rounded-full border-[2px] border-ink bg-white"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#1F1F1F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <h1 className="variety text-[21px] leading-none text-ink">设置</h1>
            <div className="absolute right-3 top-[14px]">
              <WechatCapsule />
            </div>
          </div>
        </div>

        <div className="space-y-3 px-3 pb-[92px]">
          {/* 开关组 */}
          <div className="rounded-card border-[3px] border-ink bg-white px-3 py-[6px]">
            {TOGGLES.map((t, i) => (
              <div
                key={t.key}
                className={`flex items-center gap-3 py-[12px] ${i > 0 ? 'border-t-[2px] border-[#EFEFEF]' : ''}`}
              >
                <div className="min-w-0 flex-1">
                  <p className="text-[14px] font-bold leading-none text-ink">{t.name}</p>
                  <p className="mt-[6px] text-[11px] leading-none text-secondary">{t.desc}</p>
                </div>
                <Switch on={settings[t.key]} label={t.name} onToggle={() => onToggle(t.key)} />
              </div>
            ))}
          </div>

          {/* 清除缓存 */}
          <button
            type="button"
            onClick={() => setCache('0 B')}
            className="tap flex w-full items-center justify-between rounded-card border-[3px] border-ink bg-white px-3 py-[16px] text-left"
          >
            <span className="text-[14px] font-bold leading-none text-ink">清除缓存</span>
            <span className="flex items-center gap-[6px]">
              <span className="text-[13px] leading-none text-secondary">{cache}</span>
              <svg viewBox="0 0 24 24" width="8" height="8" fill="#9E9E9E">
                <path d="M8 4l9 8-9 8z" />
              </svg>
            </span>
          </button>

          {/* 版本信息（非按钮） */}
          <div className="flex items-center justify-between rounded-card border-[3px] border-ink bg-white px-3 py-[16px]">
            <span className="text-[14px] font-bold leading-none text-ink">当前版本</span>
            <span className="text-[13px] leading-none text-secondary">v1.0.0</span>
          </div>
        </div>
      </div>

      {/* 属于「我的」的子页面，保持「我的」为高亮态 */}
      <TabBar active="mine" onChange={onChange} />
    </div>
  )
}