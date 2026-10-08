import React from 'react'

/**
 * 奖品矢量图标（积分兑换页与奖品背包页共用同一套图形）
 * variant 取值：coupon / sticker / vip / coin / frame / dice / figure / bag
 */
export function PrizeArt({ variant }) {
  const s = { stroke: '#1F1F1F', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (variant) {
    case 'coupon':
      return (
        <svg viewBox="0 0 40 40" className="h-[40px] w-[40px]" fill="none" {...s}>
          <path d="M6 14h28v12H6Z" fill="#fff" />
          <path d="M25 14v12" strokeDasharray="3 3" />
          <path d="M10 20h9" />
          <circle cx="6" cy="20" r="2.6" fill="#fff" />
        </svg>
      )
    case 'sticker':
      return (
        <svg viewBox="0 0 40 40" className="h-[40px] w-[40px]" fill="none" {...s}>
          <path d="M20 6l4 8 9 1-6.5 6 1.5 9-8-4.4-8 4.4 1.5-9L7 15l9-1Z" fill="#fff" />
        </svg>
      )
    case 'vip':
      return (
        <svg viewBox="0 0 40 40" className="h-[40px] w-[40px]" fill="none" {...s}>
          <rect x="5" y="10" width="30" height="20" rx="3.4" fill="#fff" />
          <path d="M5 16.6h30" />
          <path d="M9 22.6h8" />
          <path d="M20 5.4l2 3.6 4 .6-2.9 2.8.7 4-3.8-2-3.8 2 .7-4-2.9-2.8 4-.6Z" fill="#FFD54F" />
        </svg>
      )
    case 'coin':
      return (
        <svg viewBox="0 0 40 40" className="h-[40px] w-[40px]" fill="none" {...s}>
          <circle cx="20" cy="20" r="12.5" fill="#fff" />
          <circle cx="20" cy="20" r="8" />
          <path d="M20 14l1.9 3.9 4.3.6-3.1 3 .7 4.3-3.8-2-3.8 2 .7-4.3-3.1-3 4.3-.6Z" fill="#FFD54F" />
        </svg>
      )
    case 'frame':
      return (
        <svg viewBox="0 0 40 40" className="h-[40px] w-[40px]" fill="none" {...s}>
          <rect x="6" y="6" width="28" height="28" rx="7" fill="#fff" />
          <circle cx="20" cy="16.4" r="4.6" />
          <path d="M12 29.4c1.6-5 4.4-7.4 8-7.4s6.4 2.4 8 7.4" />
        </svg>
      )
    case 'dice':
      return (
        <svg viewBox="0 0 40 40" className="h-[40px] w-[40px]" fill="none" {...s}>
          <rect x="8" y="8" width="24" height="24" rx="5.5" fill="#fff" />
          <circle cx="15" cy="15" r="1.9" fill="#1F1F1F" stroke="none" />
          <circle cx="25" cy="15" r="1.9" fill="#1F1F1F" stroke="none" />
          <circle cx="20" cy="20" r="1.9" fill="#1F1F1F" stroke="none" />
          <circle cx="15" cy="25" r="1.9" fill="#1F1F1F" stroke="none" />
          <circle cx="25" cy="25" r="1.9" fill="#1F1F1F" stroke="none" />
        </svg>
      )
    case 'figure':
      return (
        <svg viewBox="0 0 40 40" className="h-[40px] w-[40px]" fill="none" {...s}>
          <path d="M12.5 13 10 7l5.5 3M27.5 13 30 7l-5.5 3" fill="#fff" />
          <ellipse cx="20" cy="18" rx="10" ry="9.4" fill="#fff" />
          <circle cx="16.6" cy="18" r="1.7" fill="#1F1F1F" stroke="none" />
          <circle cx="23.4" cy="18" r="1.7" fill="#1F1F1F" stroke="none" />
          <path d="M17.4 21.6c1.6 1.2 3.6 1.2 5.2 0" />
          <path d="M13.5 32.4c1.6-4.4 4-6.6 6.5-6.6s4.9 2.2 6.5 6.6" fill="#fff" />
        </svg>
      )
    case 'bag':
      return (
        <svg viewBox="0 0 40 40" className="h-[40px] w-[40px]" fill="none" {...s}>
          <path d="M8.6 15h22.8l-2 18.4H10.6Z" fill="#fff" />
          <path d="M14.6 15.6v-3.4a5.4 5.4 0 0 1 10.8 0v3.4" />
          <circle cx="20" cy="24" r="3.4" fill="#DFED5C" />
        </svg>
      )
    default:
      return null
  }
}