import React from 'react'

/* ================================================================
   插画资源：AI 生图（3D 盲盒潮玩质感），背景已抠为透明 PNG
   位于 public/illustrations/，由 Vite 直接以 /illustrations/ 提供
   ================================================================ */

const ART = '/illustrations/'

/* 通用插画容器：保留各调用点的尺寸类（w-[..] / h-[..]） */
function Art({ src, className = '' }) {
  return (
    <img src={ART + src} alt="" draggable="false" className={`object-contain ${className}`} />
  )
}

/* ================= Banner：兔耳机器人 ================= */
export function RobotBunny({ className = 'w-full' }) {
  return <Art src="robot-bunny.png" className={className} />
}

/* ================= 双入口：飞船 / 飞碟 ================= */
export function ShipArt({ className = '' }) {
  return <Art src="ship-art.png" className={className} />
}

export function UfoArt({ className = '' }) {
  return <Art src="ufo-art.png" className={className} />
}

/* ================= 达人卡：小鸡角标 ================= */
export function ChickBadge({ className = '' }) {
  return <Art src="chick-badge.png" className={className} />
}

/* ================= 基础信息：火焰小怪兽 ================= */
export function FlameMonster({ className = '' }) {
  return <Art src="flame-monster.png" className={className} />
}

/* ================= 常用功能：宇航猫 ================= */
export function AstroCat({ className = '' }) {
  return <Art src="astro-cat.png" className={className} />
}

/* ================= 活动 Banner：蝴蝶结礼盒 ================= */
export function GiftBox({ className = '' }) {
  return <Art src="gift-box.png" className={className} />
}

/* ================= 我的页：头像立绘 ================= */
export function AvatarArt({ className = '' }) {
  return (
    <img
      src={ART + 'avatar-art.jpg'}
      alt=""
      draggable="false"
      className={`h-full w-full object-cover ${className}`}
    />
  )
}

/* ================= 游戏缩略图 ================= */
const THUMB_SRC = {
  cat: 'game-thumb-cat.jpg',
  hero: 'game-thumb-hero.jpg',
  fruit: 'game-thumb-fruit.jpg',
}
const THUMB_BG = {
  cat: '#F0A6E8',
  hero: '#E8A24B',
  fruit: '#F2B23C',
}

export function GameThumb({ variant = 'cat', className = '' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[16px] border-[3px] border-ink ${className}`}
      style={{ backgroundColor: THUMB_BG[variant] }}
    >
      <img
        src={ART + THUMB_SRC[variant]}
        alt=""
        draggable="false"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  )
}

/* ================= 集市分类：小花图标（保留矢量） ================= */
export function FlowerIcon({ size = 14, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
      <g fill="#FFFFFF" stroke="#1F1F1F" strokeWidth="1.6">
        <circle cx="12" cy="6" r="3.4" />
        <circle cx="12" cy="18" r="3.4" />
        <circle cx="6" cy="12" r="3.4" />
        <circle cx="18" cy="12" r="3.4" />
      </g>
      <circle cx="12" cy="12" r="3" fill="#FFD54F" stroke="#1F1F1F" strokeWidth="1.6" />
    </svg>
  )
}

/* ================================================================
   谷灵游乐场（游戏页）
   ================================================================ */

/* ---------- 粉色闪电装饰（保留矢量，支持 color 传参） ---------- */
export function LightningBolt({ className = '', color = '#F9C8F5' }) {
  return (
    <svg viewBox="0 0 34 56" className={className}>
      <path
        d="M21 2 4 30h10L13 54 30 24H19.5Z"
        fill={color}
        stroke="#1F1F1F"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ---------- 副标题左侧：粉色微笑圆章（保留矢量，含环形文字） ---------- */
export function AntBadge({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" className={className}>
      <defs>
        <path id="antTop" d="M30 30m-21 0a21 21 0 1 1 42 0" fill="none" />
        <path id="antBot" d="M30 30m-21 0a21 21 0 1 0 42 0" fill="none" />
      </defs>
      <circle cx="30" cy="30" r="26" fill="#F9C8F5" stroke="#1F1F1F" strokeWidth="2.6" />
      <text fill="#1F1F1F" fontSize="5.4" fontWeight="700" letterSpacing="0.4">
        <textPath href="#antTop" startOffset="50%" textAnchor="middle">
          ANTISOCIAL ANT
        </textPath>
      </text>
      <text fill="#1F1F1F" fontSize="5.4" fontWeight="700" letterSpacing="0.4">
        <textPath href="#antBot" startOffset="50%" textAnchor="middle">
          ANTISOCIAL
        </textPath>
      </text>
      <circle cx="24" cy="28" r="1.9" fill="#1F1F1F" />
      <circle cx="36" cy="28" r="1.9" fill="#1F1F1F" />
      <path d="M23 35c4 4 10 4 14 0" fill="none" stroke="#1F1F1F" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

/* ---------- 头部右侧：宇航猫立绘 ---------- */
export function AstroCatHero({ className = 'w-full' }) {
  return <Art src="astro-cat-hero.png" className={className} />
}

/* ---------- 游戏卡一：猫捉老鼠 ---------- */
export function CatChaseArt({ className = '' }) {
  return <Art src="cat-chase-art.png" className={className} />
}

/* ---------- 游戏卡二：山河拼图 ---------- */
export function PuzzleArt({ className = '' }) {
  return <Art src="puzzle-art.png" className={className} />
}

/* ---------- 游戏卡三：敬请期待 ---------- */
export function QuestionArt({ className = '' }) {
  return <Art src="question-art.png" className={className} />
}

/* ---------- 右下角：谷灵票券 ---------- */
export function CouponTicket({ className = '' }) {
  return <Art src="coupon-ticket.png" className={className} />
}

/* ---------- 福利活动：幸运大转盘 ---------- */
export function LuckyWheel({ className = '' }) {
  return <Art src="lucky-wheel.png" className={className} />
}
