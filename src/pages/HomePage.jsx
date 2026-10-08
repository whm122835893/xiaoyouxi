import React, { useEffect, useRef, useState } from 'react'
import TabBar from '../components/TabBar.jsx'
import { MorePill, MoreText } from '../components/ui.jsx'
import { CircleArrow, GamepadIcon, FourStar } from '../components/icons.jsx'
import {
  ShipArt,
  UfoArt,
  ChickBadge,
  GameThumb,
  FlowerIcon,
} from '../components/Illustrations.jsx'

/* ---------------- 1. 主 Banner（轮播图） ----------------
   轮播图仅由图片构成，不叠加任何文字或装饰图形。 */
const BANNERS = [
  { key: 'holiday', src: '/illustrations/banner-01.jpg', alt: '米仔的假期' },
  { key: 'emoji', src: '/illustrations/banner-02.jpg', alt: '表情包上架啦' },
  { key: 'market', src: '/illustrations/banner-03.jpg', alt: '互动小游戏' },
]

const AUTO_PLAY_MS = 3000

function Banner() {
  const [index, setIndex] = useState(0)
  const [offset, setOffset] = useState(0) // 拖动过程中的实时位移（px）
  const [dragging, setDragging] = useState(false)
  const dragStartX = useRef(0)
  const slideWidth = useRef(0)
  const count = BANNERS.length

  // 自动播放：每次切换后重新计时，手动拖动期间暂停
  useEffect(() => {
    if (dragging) return undefined
    const timer = setTimeout(() => setIndex((i) => (i + 1) % count), AUTO_PLAY_MS)
    return () => clearTimeout(timer)
  }, [index, dragging, count])

  function onPointerDown(e) {
    slideWidth.current = e.currentTarget.clientWidth
    dragStartX.current = e.clientX
    setDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function onPointerMove(e) {
    if (!dragging) return
    setOffset(e.clientX - dragStartX.current)
  }

  function onPointerUp() {
    if (!dragging) return
    const threshold = slideWidth.current / 5
    if (offset <= -threshold) setIndex((i) => (i + 1) % count)
    else if (offset >= threshold) setIndex((i) => (i - 1 + count) % count)
    setOffset(0)
    setDragging(false)
  }

  return (
    <div className="relative h-[160px] overflow-hidden rounded-card border-[3px] border-ink bg-purple">
      <div
        className="flex h-full touch-pan-y select-none"
        style={{
          transform: `translateX(calc(${-index * 100}% + ${offset}px))`,
          transition: dragging ? 'none' : 'transform 320ms cubic-bezier(0.22, 0.61, 0.36, 1)',
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {BANNERS.map(({ key, src, alt }) => (
          <div key={key} className="h-full w-full shrink-0">
            <img
              src={src}
              alt={alt}
              draggable={false}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* 圆点指示器 */}
      <div className="absolute inset-x-0 bottom-[8px] flex justify-center gap-[6px]">
        {BANNERS.map(({ key }, i) => (
          <button
            key={key}
            type="button"
            aria-label={`切换到第 ${i + 1} 张`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-[8px] rounded-full border-[1.5px] border-ink transition-all duration-200 ${
              i === index ? 'w-[20px] bg-star' : 'w-[8px] bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

/* ---------------- 2. 双入口行 ---------------- */
function EntryCard({ color, title, subtitle, Art }) {
  return (
    <div className={`relative h-[55px] rounded-[16px] border-[3px] border-ink ${color}`}>
      <Art className="absolute -left-[14px] top-1/2 h-[52px] w-auto -translate-y-1/2" />
      <div className="absolute inset-y-0 left-[64px] right-2 flex flex-col items-center justify-center">
        <div className="flex items-center gap-[6px]">
          <span className="text-[18px] font-extrabold leading-none text-ink">{title}</span>
          <CircleArrow size={21} bg="bg-white" />
        </div>
        <span className="mt-[3px] text-[11px] leading-none text-ink/70">{subtitle}</span>
      </div>
    </div>
  )
}

/* ---------------- 3. 游戏中心 ---------------- */
const GAMES = [
  { name: '猫捉老鼠', variant: 'cat' },
  { name: '山河拼图', variant: 'hero' },
  { name: '游戏名称', variant: 'fruit' },
  { name: '游戏名称', variant: 'cat' },
]

function GameCenter() {
  return (
    <div className="relative h-[123px] overflow-hidden rounded-card border-[3px] border-ink bg-purple checker">
      <div className="flex h-full items-center gap-2 pl-3 pr-3">
        {/* 左侧竖排标题 */}
        <div className="flex shrink-0 flex-col items-center">
          <GamepadIcon size={22} />
          <span
            className="variety stroke-ink-2 mt-[2px] text-[22px] leading-[1.05] text-white"
            style={{ writingMode: 'vertical-rl' }}
          >
            游戏中心
          </span>
        </div>

        {/* 白色面板横滑 */}
        <div className="no-bar flex flex-1 gap-3 overflow-x-auto rounded-[14px] bg-white px-3 py-[10px]">
          {GAMES.map((g, i) => (
            <div key={i} className="tap flex shrink-0 flex-col items-center gap-[6px]">
              <div className="relative">
                <span className="absolute inset-x-[3px] -bottom-[3px] h-[64px] rounded-[16px] bg-black/25" />
                <GameThumb variant={g.variant} className="relative h-[64px] w-[64px]" />
              </div>
              <span className="text-[11px] font-medium leading-none text-ink">{g.name}</span>
            </div>
          ))}
        </div>

        {/* 右侧 More */}
        <div className="flex shrink-0 flex-col items-center gap-[4px]">
          <CircleArrow size={26} bg="bg-white" />
          <span className="text-[11px] font-bold leading-none text-white">More</span>
        </div>
      </div>
    </div>
  )
}

/* ---------------- 4. 热门达人 ---------------- */
function MiniAvatar({ from, to }) {
  return (
    <div
      className="h-[56px] w-[56px] overflow-hidden rounded-full border-[2px] border-ink"
      style={{ background: `linear-gradient(160deg, ${from}, ${to})` }}
    >
      <svg viewBox="0 0 56 56" className="h-full w-full">
        <circle cx="28" cy="22" r="10" fill="#FBE7DA" />
        <path d="M10 56c2-14 9-20 18-20s16 6 18 20Z" fill="#FFFFFF" opacity="0.85" />
        <path d="M17 22c1-9 6-13 11-13s10 4 11 13c-2-6-6-8-11-8s-9 2-11 8Z" fill="#373155" />
      </svg>
    </div>
  )
}

const INFLUENCERS = [
  { from: '#F3D9F7', to: '#B9C8F5' },
  { from: '#CFE3FF', to: '#F0C4D8' },
  { from: '#FFE2B8', to: '#F5C0C0' },
]

function Influencers() {
  return (
    <div className="relative rounded-card border-[3px] border-ink bg-lime-deep checker px-3 pb-3 pt-[10px]">
      <div className="flex items-center gap-2">
        <span className="variety text-[23px] leading-none text-ink">热门达人</span>
        <span className="text-[10px] font-bold leading-none tracking-[0.06em] text-ink/55">
          POPULAR&nbsp;INFLUENCER
        </span>
        <MorePill className="ml-auto" />
      </div>

      <div className="no-bar mt-[10px] flex gap-3 overflow-x-auto">
        {INFLUENCERS.map((c, i) => (
          <div
            key={i}
            className="tap relative w-[150px] shrink-0 rounded-[16px] border-[3px] border-ink bg-white px-3 pb-3 pt-3"
          >
            <ChickBadge className="absolute right-[6px] top-[6px] h-[22px] w-[22px]" />
            <div className="mx-auto w-fit">
              <MiniAvatar from={c.from} to={c.to} />
            </div>
            <p className="mt-2 text-center text-[14px] font-bold leading-none text-ink">
              这是用户昵称…
            </p>
            <p className="clamp-2 mt-[6px] text-[11px] leading-[1.5] text-secondary">
              用脚步丈量世界，用镜头书写日记。相信每张照片都…
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------------- 5. 官方囧囧集市 ---------------- */
const CATEGORIES = [
  { name: '刺桐凤凰', active: true },
  { name: '精灵依依', active: false },
  { name: '名称3', active: false },
  { name: '名称4', active: false },
]

function Market() {
  return (
    <div className="pt-1">
      <div className="flex items-center">
        <h2 className="variety relative text-[25px] leading-none text-ink">
          官方囧囧集市
          <span className="text-lime-deep">！</span>
          <span className="absolute -bottom-[3px] left-0 h-[6px] w-[92px] -skew-x-[30deg] rounded-full bg-pink" />
        </h2>
        <span className="ml-2 mt-[-8px]">
          <FourStar size={13} color="#D5E733" />
        </span>
        <div className="ml-auto">
          <MoreText />
        </div>
      </div>

      <div className="no-bar mt-[14px] flex gap-[10px] overflow-x-auto">
        {CATEGORIES.map((c) => (
          <button
            key={c.name}
            type="button"
            className={`tap flex shrink-0 items-center gap-[5px] rounded-full px-[14px] py-[7px] text-[13px] leading-none ${
              c.active
                ? 'border-[2.5px] border-ink bg-purple-light font-bold text-ink'
                : 'border-[2px] border-[#DCDCDC] bg-white font-medium text-[#B5B5B5]'
            }`}
          >
            {c.active && <FlowerIcon size={14} />}
            {c.name}
          </button>
        ))}
      </div>
    </div>
  )
}

/* ---------------- 页面 ---------------- */
export default function HomePage({ active, onChange }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-page">
      <div className="no-bar flex-1 overflow-y-auto">
        {/* 页标题：跟随内容一起滚动 */}
        <header className="flex h-[52px] items-center justify-center">
          <h1 className="variety text-[21px] leading-none text-ink">谷灵</h1>
        </header>

        <div className="space-y-3 px-3 pb-[92px]">
          <Banner />
          <div className="grid grid-cols-2 gap-3">
            <EntryCard color="bg-purple-light" title="动态" subtitle="这里是副标题" Art={ShipArt} />
            <EntryCard color="bg-lime" title="商城" subtitle="这里是副标题" Art={UfoArt} />
          </div>
          <GameCenter />
          <Influencers />
          <Market />
        </div>
      </div>
      <TabBar active={active} onChange={onChange} />
    </div>
  )
}