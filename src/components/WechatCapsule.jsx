import React from 'react'

/**
 * 顶部右侧微信胶囊：半透明白药丸 + ··· + ⊙
 */
export default function WechatCapsule({ className = '' }) {
  return (
    <div
      className={`flex h-[32px] items-center gap-[9px] rounded-full border border-white/60 bg-white/45 px-[11px] backdrop-blur-sm ${className}`}
    >
      <span className="flex items-center gap-[3px]">
        {[0, 1, 2].map((i) => (
          <i key={i} className="block h-[4.5px] w-[4.5px] rounded-full bg-ink" />
        ))}
      </span>
      <span className="h-[14px] w-px bg-ink/25" />
      <span className="flex h-[16px] w-[16px] items-center justify-center rounded-full border-[2px] border-ink">
        <i className="block h-[5px] w-[5px] rounded-full bg-ink" />
      </span>
    </div>
  )
}