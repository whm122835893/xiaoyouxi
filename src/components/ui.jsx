import React from 'react'

/** 黑色药丸 More 按钮（白字 + 箭头） */
export function MorePill({ label = 'More', className = '', chevron = true }) {
  return (
    <button
      type="button"
      className={`tap flex items-center gap-[3px] rounded-full border-[2px] border-ink bg-ink px-[11px] py-[4px] text-[12px] font-bold text-white ${className}`}
    >
      {label}
      {chevron && (
        <svg viewBox="0 0 24 24" width="10" height="10" fill="#fff">
          <path d="M8 4l9 8-9 8z" />
        </svg>
      )}
    </button>
  )
}

/** 黑色文字 More + 圆形箭头 */
export function MoreText({ label = 'More', className = '' }) {
  return (
    <button type="button" className={`tap flex items-center gap-[6px] text-[13px] font-bold text-ink ${className}`}>
      {label}
      <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full border-[2px] border-ink bg-white">
        <svg viewBox="0 0 24 24" width="11" height="11" fill="#1F1F1F">
          <path d="M8 4l9 8-9 8z" />
        </svg>
      </span>
    </button>
  )
}