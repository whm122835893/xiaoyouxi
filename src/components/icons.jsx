import React from 'react'

const base = {
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

/* ============ 底部 TabBar 图标 ============ */

// 首页 —— 小狗
export function DogIcon({ size = 26, className = '' }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M8 12.5C6 11.5 5 9 5.4 6.6 7.9 7 9.7 8 10.6 9.6" />
      <path d="M24 12.5c2-1 3-3.5 2.6-5.9C24.1 7 22.3 8 21.4 9.6" />
      <path d="M16 8.5c4.7 0 7.8 3.3 7.8 7.8 0 4.6-3.4 7.7-7.8 7.7s-7.8-2.9-7.8-7.7c0-4.5 3.1-7.8 7.8-7.8Z" />
      <circle cx="12.8" cy="16" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="19.2" cy="16" r="1.5" fill="currentColor" stroke="none" />
      <path d="M14.3 20.2c1 .8 2.4.8 3.4 0" />
    </svg>
  )
}

// 社交 —— 水母
export function JellyIcon({ size = 26, className = '' }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M16 5.5c5.4 0 9.2 4 9.2 9v2.2H6.8V14.5c0-5 3.8-9 9.2-9Z" />
      <path d="M10 16.7v4.1c0 1.2-1 1.6-1 2.7" />
      <path d="M16 16.7v5.1" />
      <path d="M22 16.7v4.1c0 1.2 1 1.6 1 2.7" />
      <circle cx="12.6" cy="12.6" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="19.4" cy="12.6" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

// 福利活动 —— 礼盒
export function GiftTabIcon({ size = 26, className = '' }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M5 11.4h22V16H5Z" />
      <path d="M6.6 16h18.8v10.6a1.6 1.6 0 0 1-1.6 1.6H8.2a1.6 1.6 0 0 1-1.6-1.6Z" />
      <path d="M16 11.4v16.8" />
      <path d="M16 11.4c-2.2-5-7.6-5-7.6-1.6 0 2.3 3.9 2.5 7.6 1.6Z" />
      <path d="M16 11.4c2.2-5 7.6-5 7.6-1.6 0 2.3-3.9 2.5-7.6 1.6Z" />
    </svg>
  )
}

// 我的 —— 机器人
export function RobotIcon({ size = 26, className = '' }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M16 5.6v4.6" />
      <circle cx="16" cy="4.5" r="1.7" />
      <rect x="7.8" y="10.6" width="16.4" height="13.2" rx="4.4" />
      <path d="M4.6 15v4.6M27.4 15v4.6" />
      <circle cx="12.6" cy="16.6" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="19.4" cy="16.6" r="1.5" fill="currentColor" stroke="none" />
      <path d="M13.2 20.9h5.6" />
    </svg>
  )
}

// 中央扫码按钮 —— 扫描框
export function ScanIcon({ size = 28, className = '' }) {
  return (
    <svg {...base} width={size} height={size} strokeWidth={2.4} className={className}>
      <path d="M5 11V8a3 3 0 0 1 3-3h3" />
      <path d="M27 11V8a3 3 0 0 0-3-3h-3" />
      <path d="M5 21v3a3 3 0 0 0 3 3h3" />
      <path d="M27 21v3a3 3 0 0 1-3 3h-3" />
      <path d="M9.5 16h13" />
    </svg>
  )
}

// 中央悬浮按钮 —— 游戏手柄
export function GamepadTabIcon({ size = 28, className = '' }) {
  return (
    <svg {...base} width={size} height={size} strokeWidth={2.4} className={className}>
      <path d="M11 10h10c3.3 0 5.5 2.2 5.5 5.4 0 3.6-1.3 7.6-3.4 7.6-1.7 0-2.4-1.5-4.1-1.5h-6c-1.7 0-2.4 1.5-4.1 1.5-2.1 0-3.4-4-3.4-7.6C5.5 12.2 7.7 10 11 10Z" />
      <path d="M11.4 13.2v4.6M9.1 15.5h4.6" />
      <circle cx="20.8" cy="14.4" r="1.35" fill="currentColor" stroke="none" />
      <circle cx="23.4" cy="17.1" r="1.35" fill="currentColor" stroke="none" />
    </svg>
  )
}

/* ============ 通用小图标 ============ */

// 圆形箭头按钮
export function CircleArrow({ size = 24, className = '', bg = 'bg-white' }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full border-[2px] border-ink ${bg} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 24 24" width={size * 0.56} height={size * 0.56} fill="none" stroke="#1F1F1F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5l7 7-7 7" />
      </svg>
    </span>
  )
}

// 四角星（闪光）
export function FourStar({ size = 16, className = '', color = '#1F1F1F' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill={color}>
      <path d="M12 1.6c.5 5.3 2.4 7.2 7.7 7.7-5.3.5-7.2 2.4-7.7 7.7-.5-5.3-2.4-7.2-7.7-7.7 5.3-.5 7.2-2.4 7.7-7.7Z" />
    </svg>
  )
}

// 猫脸
export function CatFace({ size = 14, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="#1F1F1F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 10 4.2 4.6 8.2 6.6" />
      <path d="M19 10l.8-5.4-4 2" />
      <path d="M12 6.2c4 0 7.2 2.8 7.2 6.6 0 3.9-3.2 6.4-7.2 6.4s-7.2-2.5-7.2-6.4c0-3.8 3.2-6.6 7.2-6.6Z" />
      <path d="M4.2 12.4H1.6M20.4 12.4h2.6" />
      <circle cx="9.4" cy="12.2" r="1" fill="#1F1F1F" stroke="none" />
      <circle cx="14.6" cy="12.2" r="1" fill="#1F1F1F" stroke="none" />
    </svg>
  )
}

// ♀ 女性符号
export function FemaleIcon({ size = 18, className = '' }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border-[2px] border-ink bg-pink ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 24 24" width={size * 0.62} height={size * 0.62} fill="none" stroke="#1F1F1F" strokeWidth="2.2" strokeLinecap="round">
        <circle cx="12" cy="9" r="5" />
        <path d="M12 14v7M9 18h6" />
      </svg>
    </span>
  )
}

// 绿色手柄（游戏中心标题图标）
export function GamepadIcon({ size = 22, className = '' }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none" stroke="#1F1F1F" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M5 12.5C5 9.5 7.4 8 10 8h12c2.6 0 5 1.5 5 4.5 0 4-1.4 9.5-3.6 9.5-1.8 0-2.6-1.6-4.4-1.6h-6c-1.8 0-2.6 1.6-4.4 1.6C6.4 22 5 16.5 5 12.5Z" fill="#5BD06B" />
      <path d="M11.5 12.4v5M9 14.9h5" stroke="#1F1F1F" />
      <circle cx="21" cy="13.4" r="1.3" fill="#1F1F1F" stroke="none" />
      <circle cx="23.4" cy="16.4" r="1.3" fill="#1F1F1F" stroke="none" />
    </svg>
  )
}