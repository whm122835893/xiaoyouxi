import React from 'react'
import TabBar from '../components/TabBar.jsx'
import {
  LightningBolt,
  AntBadge,
  AstroCatHero,
  CatChaseArt,
  PuzzleArt,
  QuestionArt,
  CouponTicket,
} from '../components/Illustrations.jsx'

/* ---------------- 综艺标题：紫描边 + 白描边 + 黄绿填充（三层叠加） ---------------- */
function SuperTitle({ children, className = '' }) {
  const layers = [
    { w: 9, c: '#373155' },
    { w: 5, c: '#FFFFFF' },
  ]
  return (
    <span className={`relative inline-block ${className}`}>
      {layers.map((l) => (
        <span
          key={l.c}
          aria-hidden="true"
          className="variety absolute left-0 top-0 whitespace-nowrap"
          style={{
            WebkitTextStroke: `${l.w}px ${l.c}`,
            color: 'transparent',
            paintOrder: 'stroke fill',
          }}
        >
          {children}
        </span>
      ))}
      <span className="variety relative whitespace-nowrap text-lime">{children}</span>
    </span>
  )
}

/* ---------------- 双箭头（游戏列表） ---------------- */
function Chevrons() {
  return (
    <svg viewBox="0 0 20 16" className="ml-[4px] inline-block h-[11px] w-[13px]" fill="none" stroke="#1F1F1F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3l6 5 6-5M4 9l6 5 6-5" />
    </svg>
  )
}

/* ---------------- GO! 药丸 ---------------- */
function GoPill({ color = '#F062A8' }) {
  return (
    <span className="inline-flex -rotate-6 items-center justify-center rounded-full border-[2.5px] border-ink bg-white px-[11px] py-[3px]">
      <span className="text-[16px] font-extrabold leading-none" style={{ color }}>
        GO!
      </span>
    </span>
  )
}

/* ---------------- 游戏卡 ---------------- */
function GameCard({ color, title, Art, go, goColor, artClass = '' }) {
  return (
    <div
      className="tap relative h-[101px] rounded-[24px] border-[3px] border-ink"
      style={{ backgroundColor: color }}
    >
      {/* 只裁剪纹理，插画可探出卡面 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[21px]">
        <div className="rays absolute inset-0" />
        <div className="halftone absolute inset-y-0 left-0 w-[60px]" />
        <div className="halftone absolute inset-y-0 right-0 w-[60px]" />
      </div>

      <Art className={`pointer-events-none absolute ${artClass}`} />

      <div className="absolute inset-y-0 right-[16px] flex flex-col items-end justify-center">
        <span className="text-[27px] font-extrabold leading-none tracking-tight text-ink">
          {title}
        </span>
        {go && (
          <span className="mt-[11px]">
            <GoPill color={goColor} />
          </span>
        )}
      </div>
    </div>
  )
}

/* ---------------- 页面 ---------------- */
export default function GamePage({ active, onChange }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-game">
      {/* 背景：网格 + 斜向光带 */}
      <div className="game-grid pointer-events-none absolute inset-0" />
      <div className="game-bands pointer-events-none absolute inset-0" />

      <div className="no-bar relative flex-1 overflow-y-auto">
        <div className="relative pb-[104px]">
          {/* GOODS LIVE 水印 */}
          <span className="variety pointer-events-none absolute left-[-3px] top-[-7px] whitespace-nowrap text-[30px] leading-none text-[#5644C4]">
            GOODS LIVE
          </span>

          {/* 宇航猫立绘（位于卡片之下） */}
          <div className="pointer-events-none absolute right-[8px] top-[2px] z-0 w-[166px]">
            <AstroCatHero />
          </div>

          {/* 标题 + 副标题 */}
          <div className="relative z-10 pl-[18px] pt-[13px]">
            <div className="flex items-start">
              <LightningBolt className="mt-[5px] h-[32px] w-auto" />
              <SuperTitle className="ml-[5px] text-[36px] leading-none">谷灵游乐场</SuperTitle>
              <LightningBolt className="ml-[3px] mt-[9px] h-[23px] w-auto" />
            </div>

            {/* 副标题：白条 + 黄绿层偏移 */}
            <div className="relative mt-[20px] w-[308px]">
              <div className="absolute left-[-4px] top-[5px] h-full w-full rounded-[9px] border-[2.5px] border-ink bg-[#FDE05E]" />
              <div className="relative flex h-[31px] items-center rounded-[9px] border-[2.5px] border-ink bg-white pl-[3px] pr-[10px]">
                <AntBadge className="h-[30px] w-[30px] shrink-0" />
                <span className="ml-[7px] text-[15px] font-extrabold leading-none text-ink">
                  多款游戏 欢迎畅玩
                </span>
              </div>
            </div>
          </div>

          {/* 游戏列表标签（左侧贴边） */}
          <div className="relative z-10 mt-[25px] flex w-[98px] items-center rounded-r-full border-[2.5px] border-l-0 border-ink bg-[#FDE05E] py-[5px] pl-[13px]">
            <span className="text-[13px] font-extrabold leading-none text-ink">游戏列表</span>
            <Chevrons />
          </div>

          {/* 游戏卡列表 */}
          <div className="relative z-10 mt-[29px] space-y-[26px] px-4">
            <GameCard
              color="#DEEC4E"
              title="猫捉老鼠"
              Art={CatChaseArt}
              go
              goColor="#F062A8"
              artClass="-top-[24px] left-[2px] w-[120px]"
            />
            <GameCard
              color="#5CE8F5"
              title="山河拼图"
              Art={PuzzleArt}
              go
              goColor="#F2B23C"
              artClass="-top-[30px] left-[1px] w-[124px]"
            />
            <GameCard
              color="#F5A5D8"
              title="敬请期待"
              Art={QuestionArt}
              artClass="-top-[18px] left-[20px] w-[70px]"
            />
          </div>

          {/* 我的票券 */}
          <div className="relative z-10 mr-[14px] mt-[27px] ml-auto flex w-[112px] flex-col items-center">
            <CouponTicket className="w-[112px]" />
            <span className="variety stroke-ink-2 -mt-[6px] text-[19px] leading-none text-white">
              我的票券
            </span>
          </div>
        </div>
      </div>

      <TabBar active={active} onChange={onChange} />
    </div>
  )
}