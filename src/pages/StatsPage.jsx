import React from 'react'
import TabBar from '../components/TabBar.jsx'
import WechatCapsule from '../components/WechatCapsule.jsx'
import { FourStar } from '../components/icons.jsx'
import { GameThumb } from '../components/Illustrations.jsx'
import { PrizeArt } from '../components/prizeArt.jsx'

/* ================================================================
   「我的」子页面：我的游戏 / 奖品背包 / 游戏时长
   三页共用同一套头部（返回 + 标题 + 微信胶囊）与底部导航
   ================================================================ */

const TOTAL_HOURS = 3008

/* 玩过的游戏与各自时长（合计 = 3008，与「我的」页「游戏时长」数值一致） */
const PLAYED = [
  { id: 'cat', name: '猫捉老鼠', variant: 'cat', hours: 1584, bar: '#DEEC4E', last: '今天 14:20' },
  { id: 'puzzle', name: '山河拼图', variant: 'hero', hours: 986, bar: '#5CE8F5', last: '昨天 21:05' },
  { id: 'wheel', name: '幸运大转盘', variant: 'fruit', hours: 438, bar: '#F5A5D8', last: '3 天前' },
]

/* 奖品背包（件数合计 = 189，与「我的」页「我的奖品」数值一致） */
const BACKPACK = [
  { id: 'dice', name: '抽奖券', desc: '幸运大转盘可用', variant: 'dice', bg: '#F9C8F5', count: 96 },
  { id: 'coin', name: '游戏币', desc: '游乐场通用', variant: 'coin', bg: '#5CE8F5', count: 48 },
  { id: 'coupon', name: '5 元无门槛券', desc: '全场通用', variant: 'coupon', bg: '#DEEC4E', count: 26 },
  { id: 'sticker', name: '谷灵贴纸包', desc: '限定款 6 张', variant: 'sticker', bg: '#F5A5D8', count: 12 },
  { id: 'frame', name: '限定头像框', desc: '永久有效', variant: 'frame', bg: '#FFD54F', count: 5 },
  { id: 'figure', name: '宇航猫手办', desc: '限量周边', variant: 'figure', bg: '#DEEC4E', count: 2 },
]

const TITLES = {
  mygames: '我的游戏',
  prizebag: '奖品背包',
  playtime: '游戏时长',
}

/* ---------------- 汇总卡：纯色底（lime） ---------------- */
function SummaryCard({ label, value, unit, note }) {
  return (
    <div className="relative rounded-card border-[3px] border-ink bg-lime checker px-3 py-[14px]">
      <p className="text-[12px] font-semibold leading-none text-ink/70">{label}</p>
      <p className="mt-[7px] text-[30px] font-extrabold leading-none text-ink">
        {value}
        <span className="ml-[4px] text-[14px] font-bold">{unit}</span>
      </p>
      {note && <p className="mt-[9px] text-[11px] font-medium leading-none text-ink/70">{note}</p>}
    </div>
  )
}

/* ---------------- 汇总卡：紫色渐变 + 马赛克 ---------------- */
function PurpleSummaryCard({ label, value, unit }) {
  return (
    <div className="relative overflow-hidden rounded-card border-[3px] border-ink bg-gradient-to-br from-purple-light to-purple px-3 py-[14px]">
      {/* checker 与渐变都占用 background-image，故马赛克单独叠一层 */}
      <div className="checker pointer-events-none absolute inset-0" />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-[12px] font-semibold leading-none text-white/85">{label}</p>
          <p className="mt-[7px] text-[30px] font-extrabold leading-none text-white">
            {value}
            <span className="ml-[4px] text-[14px] font-bold">{unit}</span>
          </p>
        </div>
        <FourStar size={34} color="#FFD54F" />
      </div>
    </div>
  )
}

/* ---------------- 我的游戏：单条游戏 ---------------- */
function PlayedRow({ game, onPlay }) {
  return (
    <div className="relative flex items-center gap-3 rounded-card border-[3px] border-ink bg-white px-3 py-[12px]">
      <GameThumb variant={game.variant} className="h-[64px] w-[64px] shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="text-[16px] font-extrabold leading-none text-ink">{game.name}</p>
        <p className="mt-[8px] text-[12px] leading-none text-secondary">累计 {game.hours} 小时</p>
        <p className="mt-[6px] text-[11px] leading-none text-secondary">最近游玩：{game.last}</p>
      </div>
      <button
        type="button"
        onClick={onPlay}
        className="tap shrink-0 rounded-full border-[2px] border-ink bg-lime px-[14px] py-[7px] text-[13px] font-extrabold leading-none text-ink"
      >
        继续玩
      </button>
    </div>
  )
}

/* ---------------- 奖品背包：单件奖品 ---------------- */
function BackpackCard({ item }) {
  return (
    <div className="relative flex flex-col rounded-card border-[3px] border-ink bg-white px-[10px] pb-[11px] pt-[14px]">
      <span
        className="relative mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-[2.5px] border-ink"
        style={{ backgroundColor: item.bg }}
      >
        <PrizeArt variant={item.variant} />
        <span className="absolute -right-[4px] -top-[4px] flex h-[24px] min-w-[24px] items-center justify-center rounded-full border-[2px] border-ink bg-star px-[5px] text-[11px] font-extrabold leading-none text-ink">
          ×{item.count}
        </span>
      </span>
      <p className="mt-[10px] text-center text-[14px] font-extrabold leading-tight text-ink">{item.name}</p>
      <p className="mt-[3px] text-center text-[11px] leading-none text-secondary">{item.desc}</p>
      <button
        type="button"
        className="tap mt-[10px] w-full rounded-full border-[2px] border-ink bg-lime py-[6px] text-[12px] font-extrabold leading-none text-ink"
      >
        使用
      </button>
    </div>
  )
}

/* ---------------- 游戏时长：单条游戏 + 占比条 ---------------- */
function PlaytimeRow({ game }) {
  const pct = Math.round((game.hours / TOTAL_HOURS) * 100)
  return (
    <div className="relative rounded-card border-[3px] border-ink bg-white px-3 py-[12px]">
      <div className="flex items-center gap-3">
        <GameThumb variant={game.variant} className="h-[48px] w-[48px] shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <p className="text-[15px] font-extrabold leading-none text-ink">{game.name}</p>
            <p className="shrink-0 text-[15px] font-extrabold leading-none text-ink">
              {game.hours}
              <span className="ml-[2px] text-[10px] font-bold text-secondary">小时</span>
            </p>
          </div>
          <div className="mt-[10px] h-[12px] overflow-hidden rounded-full border-[2px] border-ink bg-[#EDEDED]">
            <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: game.bar }} />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------- 页面 ---------------- */
export default function StatsPage({ mode, onChange }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-page">
      <div className="no-bar flex-1 overflow-y-auto">
        <div className="relative overflow-hidden">
          {/* 顶部渐变（不铺小点，小点只保留在卡片边框内） */}
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
            <h1 className="variety text-[21px] leading-none text-ink">{TITLES[mode]}</h1>
            <div className="absolute right-3 top-[14px]">
              <WechatCapsule />
            </div>
          </div>

          {/* 汇总卡 */}
          <div className="px-3">
            {mode === 'mygames' && (
              <SummaryCard label="已玩过的游戏" value={PLAYED.length} unit="款" note={`累计时长 ${TOTAL_HOURS} 小时`} />
            )}
            {mode === 'prizebag' && <PurpleSummaryCard label="背包内奖品" value={189} unit="件" />}
            {mode === 'playtime' && (
              <SummaryCard label="累计游戏时长" value={TOTAL_HOURS} unit="小时" note={`共 ${PLAYED.length} 款游戏`} />
            )}
          </div>
        </div>

        {/* 列表 */}
        <div className="px-3 pb-[92px] pt-[14px]">
          {mode === 'mygames' && (
            <div className="space-y-3">
              {PLAYED.map((g) => (
                <PlayedRow key={g.id} game={g} onPlay={() => onChange('game')} />
              ))}
            </div>
          )}

          {mode === 'prizebag' && (
            <div className="grid grid-cols-2 gap-[12px]">
              {BACKPACK.map((item) => (
                <BackpackCard key={item.id} item={item} />
              ))}
            </div>
          )}

          {mode === 'playtime' && (
            <div className="space-y-3">
              {PLAYED.map((g) => (
                <PlaytimeRow key={g.id} game={g} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 属于「我的」的子页面，保持「我的」为高亮态 */}
      <TabBar active="mine" onChange={onChange} />
    </div>
  )
}