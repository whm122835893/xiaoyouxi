import React from 'react'

const LIME = '#DFED5C'
const WHITE = '#FFFFFF'

function Svg({ children, size = 34, className = '' }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="#1F1F1F"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

/* 宫格图标（黑线稿 + 黄绿点缀） */
export function FeatureIcon({ name, size = 34, className = '' }) {
  switch (name) {
    case 'profile':
      return (
        <Svg size={size} className={className}>
          <rect x="4" y="6" width="24" height="20" rx="4" fill={LIME} />
          <circle cx="12" cy="14" r="3.2" fill="#fff" />
          <path d="M7.2 21.4c.9-3 2.8-4.4 4.8-4.4s3.9 1.4 4.8 4.4" fill="#fff" />
          <path d="M20 13.2h5M20 18h5" />
        </Svg>
      )
    case 'dynamic':
      return (
        <Svg size={size} className={className}>
          <circle cx="16" cy="16" r="9" fill={LIME} />
          <path d="M4 12c6 5 18 5 24 0" />
          <path d="M11 25c2 3 8 3 10 0" />
          <circle cx="24" cy="8" r="1.6" fill="#1F1F1F" />
        </Svg>
      )
    case 'wallet':
      return (
        <Svg size={size} className={className}>
          <rect x="4" y="8" width="24" height="17" rx="4" fill={LIME} />
          <path d="M4 13h20" />
          <circle cx="22" cy="19" r="2" fill="#1F1F1F" />
        </Svg>
      )
    case 'mall':
      return (
        <Svg size={size} className={className}>
          <path d="M7 11h18l-1.6 14a2 2 0 0 1-2 1.8H10.6a2 2 0 0 1-2-1.8Z" fill={LIME} />
          <path d="M11.5 12V9.5a4.5 4.5 0 0 1 9 0V12" />
          <path d="M16 16l1.4 2.8 3 .5-2.2 2 .5 3-2.7-1.4-2.7 1.4.5-3-2.2-2 3-.5Z" fill="#1F1F1F" stroke="none" />
        </Svg>
      )
    case 'prize':
      return (
        <Svg size={size} className={className}>
          <rect x="5" y="13" width="22" height="13" rx="3" fill={LIME} />
          <path d="M4 13h24v4H4Z" fill="#fff" />
          <path d="M16 13v13" />
          <path d="M16 13c-2-5-8-5-8-1 0 2 4 2 8 1ZM16 13c2-5 8-5 8-1 0 2-4 2-8 1Z" />
        </Svg>
      )
    case 'certify':
      return (
        <Svg size={size} className={className}>
          <path d="M16 4l3.2 2.6 4.1-.3.9 4 3.4 2.3-1.9 3.6 1.9 3.6-3.4 2.3-.9 4-4.1-.3L16 28l-3.2-2.6-4.1.3-.9-4L4.4 19.4l1.9-3.6L4.4 12.2l3.4-2.3.9-4 4.1.3Z" fill={LIME} />
          <path d="M12 15.8l2.8 2.8L21 13" stroke="#1F1F1F" strokeWidth="2.2" />
        </Svg>
      )
    case 'record':
      return (
        <Svg size={size} className={className}>
          <path d="M8 5h13l4 4v18H8Z" fill={LIME} />
          <path d="M21 5v4h4" />
          <path d="M12 14h9M12 18h9M12 22h5" />
        </Svg>
      )
    case 'settings':
      return (
        <Svg size={size} className={className}>
          <circle cx="16" cy="16" r="7" fill={LIME} />
          <circle cx="16" cy="16" r="2.6" fill="#1F1F1F" />
          <path d="M16 4.5v3M16 24.5v3M4.5 16h3M24.5 16h3M8 8l2 2M22 22l2 2M24 8l-2 2M10 22l-2 2" />
        </Svg>
      )
    case 'honor':
      return (
        <Svg size={size} className={className}>
          <circle cx="16" cy="13" r="8" fill={LIME} />
          <circle cx="16" cy="13" r="3.4" fill="#1F1F1F" stroke="none" />
          <path d="M11 20l-2 8 7-3.4L23 28l-2-8" />
        </Svg>
      )
    case 'avatarFrame':
      return (
        <Svg size={size} className={className}>
          <rect x="5" y="5" width="22" height="22" rx="5" fill={LIME} />
          <circle cx="16" cy="13.5" r="3.6" fill="#fff" />
          <path d="M10 22c1.4-3.6 3.6-5.2 6-5.2s4.6 1.6 6 5.2" fill="#fff" />
        </Svg>
      )
    case 'footprint':
      return (
        <Svg size={size} className={className}>
          <circle cx="14" cy="14" r="8" fill={LIME} />
          <path d="M20 20l7 7" />
          <path d="M10 14h8" stroke="#1F1F1F" />
        </Svg>
      )
    case 'service':
      return (
        <Svg size={size} className={className}>
          <path d="M7 18v-3a9 9 0 0 1 18 0v3" />
          <rect x="4" y="17" width="5" height="8" rx="2.4" fill={LIME} />
          <rect x="23" y="17" width="5" height="8" rx="2.4" fill={LIME} />
          <path d="M25 25v1.5a3 3 0 0 1-3 3h-4" />
        </Svg>
      )
    default:
      return null
  }
}

/* ============ 福利活动：入口图标 ============ */

// 每日签到 —— 日历 + 对勾
export function WelfareIcon({ name, size = 44, className = '' }) {
  switch (name) {
    case 'signin':
      return (
        <Svg size={size} className={className}>
          <rect x="5.5" y="8" width="21" height="18.5" rx="4" fill="#5CE8F5" />
          <path d="M5.5 13.4h21" />
          <path d="M11 5.6v4.4M21 5.6v4.4" />
          <path d="M12.6 19.4l2.6 2.6 4.4-5" strokeWidth="2.4" stroke={WHITE} />
        </Svg>
      )
    case 'lottery':
      return (
        <Svg size={size} className={className}>
          <circle cx="16" cy="16" r="10.6" fill="#F9C8F5" />
          <circle cx="16" cy="16" r="3.4" fill={WHITE} />
          <path d="M16 5.4v3.2M16 23.4v3.2M5.4 16h3.2M23.4 16h3.2" />
          <path d="M9.2 9.2l2.3 2.3M20.5 20.5l2.3 2.3M22.8 9.2l-2.3 2.3M11.5 20.5l-2.3 2.3" stroke="#DFED5C" strokeWidth="2.6" />
        </Svg>
      )
    case 'redeem':
      return (
        <Svg size={size} className={className}>
          <path d="M16 4.6l3.4 2.8 4.4-.3.9 4.3 3.6 2.4-2 3.8 2 3.8-3.6 2.4-.9 4.3-4.4-.3L16 30l-3.4-2.8-4.4.3-.9-4.3-3.6-2.4 2-3.8-2-3.8 3.6-2.4.9-4.3 4.4.3Z" fill="#FFD54F" />
          <path d="M16 11.4l1.7 3.5 3.8.6-2.7 2.7.6 3.8-3.4-1.8-3.4 1.8.6-3.8-2.7-2.7 3.8-.6Z" fill={WHITE} stroke="none" />
        </Svg>
      )
    case 'task':
      return (
        <Svg size={size} className={className}>
          <rect x="6" y="5" width="20" height="22" rx="4" fill="#A697FF" />
          <path d="M10.4 12.4l2.2 2.2 3.8-4.2" stroke={WHITE} strokeWidth="2.4" />
          <path d="M10.4 21.4l2.2 2.2 3.8-4.2" stroke={WHITE} strokeWidth="2.4" />
          <path d="M19 13.4h4M19 22.4h4" stroke={WHITE} strokeWidth="2.4" />
        </Svg>
      )
    case 'coupon':
      return (
        <Svg size={size} className={className}>
          <path d="M5 11.4h22v9.2H5Z" fill="#DEEC4E" />
          <path d="M20.4 11.4v9.2" strokeDasharray="3 3" />
          <path d="M9 16h7" strokeWidth="2.4" />
          <circle cx="24" cy="16" r="2.4" fill={WHITE} />
        </Svg>
      )
    case 'invite':
      return (
        <Svg size={size} className={className}>
          <circle cx="12.6" cy="12" r="4.8" fill="#5CE8F5" />
          <path d="M4.6 26c1.2-4.6 4.2-7 8-7s6.8 2.4 8 7Z" fill="#5CE8F5" />
          <circle cx="23.4" cy="13.6" r="3.6" fill="#F9C8F5" />
          <path d="M18.6 25.4c.8-3.4 2.8-5.2 4.8-5.2s4 1.8 4.8 5.2Z" fill="#F9C8F5" />
          <path d="M23.4 9.4v8.4M19.2 13.6h8.4" strokeWidth="2.4" />
        </Svg>
      )
    case 'vip':
      return (
        <Svg size={size} className={className}>
          <path d="M4.6 12.4l5.4 4.2L16 7l6 9.6 5.4-4.2-2.2 14.6H6.8Z" fill="#FFD54F" />
          <path d="M6.8 22h18.4" strokeWidth="2.4" />
        </Svg>
      )
    case 'more':
      return (
        <Svg size={size} className={className}>
          <rect x="6" y="6" width="8" height="8" rx="2.4" fill={LIME} />
          <rect x="18" y="6" width="8" height="8" rx="2.4" fill="#5CE8F5" />
          <rect x="6" y="18" width="8" height="8" rx="2.4" fill="#F9C8F5" />
          <rect x="18" y="18" width="8" height="8" rx="2.4" fill="#A697FF" />
        </Svg>
      )
    case 'clock':
      return (
        <Svg size={size} className={className}>
          <circle cx="16" cy="16" r="11" fill="#5CE8F5" />
          <path d="M16 9.4V16l4.8 3" strokeWidth="2.4" />
        </Svg>
      )
    case 'game':
      return (
        <Svg size={size} className={className}>
          <path d="M6 14.6C6 11.4 8.4 10 11 10h10c2.6 0 5 1.4 5 4.6 0 4-1.4 9.4-3.6 9.4-1.8 0-2.6-1.6-4.4-1.6h-5c-1.8 0-2.6 1.6-4.4 1.6C7.4 24 6 18.6 6 14.6Z" fill="#A697FF" />
          <path d="M11.8 14.6v4.4M9.6 16.8h4.4" strokeWidth="2.2" />
          <circle cx="20.6" cy="15.6" r="1.3" fill="#1F1F1F" stroke="none" />
          <circle cx="22.9" cy="18" r="1.3" fill="#1F1F1F" stroke="none" />
        </Svg>
      )
    default:
      return null
  }
}