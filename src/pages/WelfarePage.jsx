import React, { useState } from 'react'
import TabBar from '../components/TabBar.jsx'
import { FourStar, CircleArrow } from '../components/icons.jsx'
import { WelfareIcon } from '../components/featureIcons.jsx'
import { GiftBox, LuckyWheel } from '../components/Illustrations.jsx'

/* ---------------- 1. 每日签到 ---------------- */
const CHECK_IN = [
  { label: '第1天', reward: '5' },
  { label: '第2天', reward: '10' },
  { label: '第3天', reward: '15' },
  { label: '第4天', reward: '20' },
  { label: '第5天', reward: '25' },
  { label: '第6天', reward: '30' },
  { label: '大礼', reward: '★' },
]

function CheckInCard() {
  return (
    <div className="relative rounded-card border-[3px] border-ink bg-lime checker px-3 pb-3 pt-[12px]">
      <div className="relative flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h3 className="variety stroke-ink text-[23px] leading-none text-white">每日签到</h3>
          <p className="mt-[6px] text-[12px] font-semibold leading-none text-ink/70">
            连续签到 7 天，解锁神秘大礼
          </p>
        </div>
        {/* 礼盒：缩小后与标题同排，收在卡片边框内 */}
        <GiftBox className="h-[52px] w-auto shrink-0" />
      </div>

      <div className="relative mt-[14px] flex items-start justify-between rounded-panel bg-white px-[8px] py-[10px]">
        {CHECK_IN.map((d, i) => (
          <div key={d.label} className="flex flex-col items-center gap-[5px]">
            <span
              className={`flex h-[30px] w-[30px] items-center justify-center rounded-full border-[2px] border-ink text-[13px] font-extrabold leading-none ${
                i === 6 ? 'bg-star' : 'bg-lime-light'
              }`}
            >
              {d.reward}
            </span>
            <span className="text-[10px] leading-none text-secondary">{d.label}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="tap relative mt-[14px] flex h-[44px] w-full items-center justify-center gap-[6px] rounded-full border-[3px] border-ink bg-ink text-[16px] font-extrabold leading-none text-lime"
      >
        立即签到
        <FourStar size={14} color="#DFED5C" />
      </button>
    </div>
  )
}

/* ---------------- 3. 抽奖 Banner ---------------- */
function LotteryBanner() {
  return (
    <div className="relative h-[126px] overflow-hidden rounded-card border-[3px] border-ink bg-purple checker">
      <div className="flex h-full items-center">
        <div className="pl-[14px]">
          <h3 className="variety stroke-ink-2 text-[26px] leading-none text-white">幸运大转盘</h3>
          <p className="mt-[8px] text-[12px] font-semibold leading-none text-white/85">
            每天 3 次免费抽奖机会
          </p>
          <button
            type="button"
            className="tap mt-[13px] inline-flex items-center gap-[5px] rounded-full border-[2.5px] border-ink bg-lime px-[16px] py-[7px] text-[14px] font-extrabold leading-none text-ink"
          >
            立即抽奖
            <FourStar size={13} />
          </button>
        </div>
        {/* 转盘高 118px：卡片内容区高 120px（126 - 上下 3px 边框），避免被 overflow-hidden 削边 */}
        <LuckyWheel className="ml-auto h-[118px] w-auto shrink-0 pr-1" />
      </div>
    </div>
  )
}

/* ---------------- 4. 任务中心 ---------------- */
const TASKS = [
  { id: 'online', name: '在线 5 分钟', desc: '可获得 10 积分奖励', icon: 'clock', bg: '#5CE8F5' },
  { id: 'play', name: '玩两款游戏', desc: '可获得 20 积分奖励', icon: 'game', bg: '#A697FF' },
  { id: 'signin', name: '每日签到', desc: '可获得 5 积分奖励', icon: 'signin', bg: '#DEEC4E' },
  { id: 'share', name: '分享福利给好友', desc: '可获得 15 积分奖励', icon: 'invite', bg: '#F9C8F5' },
]

function TaskCenter({ done, onDone }) {
  return (
    <div className="relative rounded-card border-[3px] border-ink bg-lime-btn checker px-3 pb-3 pt-[12px]">
      <div className="flex items-start justify-between">
        <div className="relative">
          <h3 className="variety text-[23px] leading-none text-ink">任务中心</h3>
          <span className="mt-[4px] block h-[5px] w-[52px] -skew-x-[30deg] rounded-full bg-pink" />
          <p className="mt-[4px] text-[11px] font-semibold italic leading-none text-secondary">
            Task&nbsp;Center
          </p>
        </div>
        <button type="button" className="tap flex items-center gap-[6px] text-[12px] font-bold text-ink">
          任务记录
          <CircleArrow size={20} bg="bg-white" />
        </button>
      </div>

      <div className="mt-[14px] overflow-hidden rounded-panel bg-white">
        {TASKS.map((t, i) => {
          const isDone = done.includes(t.id)
          return (
            <div
              key={t.id}
              className={`flex items-center gap-[10px] px-[11px] py-[11px] ${
                i ? 'border-t-2 border-ink/10' : ''
              }`}
            >
              <span
                className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[11px] border-[2px] border-ink"
                style={{ backgroundColor: t.bg }}
              >
                <WelfareIcon name={t.icon} size={26} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-extrabold leading-none text-ink">{t.name}</p>
                <p className="mt-[5px] truncate text-[11px] leading-none text-secondary">{t.desc}</p>
              </div>
              <button
                type="button"
                disabled={isDone}
                onClick={() => onDone(t.id)}
                className={`tap shrink-0 rounded-full border-[2px] border-ink px-[12px] py-[5px] text-[12px] font-extrabold leading-none ${
                  isDone ? 'bg-[#EDEDED] text-secondary' : 'bg-lime text-ink'
                }`}
              >
                {isDone ? '已完成' : '去完成'}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ---------------- 页面 ---------------- */
export default function WelfarePage({ active, onChange }) {
  const [doneTasks, setDoneTasks] = useState(['signin'])

  const handleDone = (id) => {
    setDoneTasks((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-page">
      <div className="no-bar flex-1 overflow-x-hidden overflow-y-auto">
        <div className="relative">
          {/* 顶部渐变（背景不铺小点，小点只保留在卡片边框内） */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[230px] bg-gradient-to-b from-[#F9C8F5] via-[#F5DAF3] to-page" />
        </div>

        <div className="space-y-3 px-3 pb-[92px] pt-[54px]">
          <CheckInCard />
          <LotteryBanner />
          <TaskCenter done={doneTasks} onDone={handleDone} />
        </div>
      </div>

      <TabBar active={active} onChange={onChange} />
    </div>
  )
}
