import React from 'react'

/* ================================================================
   头像：预设头像列表 + 渲染组件
   「我的」页与「个人信息」编辑页共用，保证两边显示一致
   fit = 'cover' 用原始方形图铺满；'contain' 用抠图插画 + 纯色底
   ================================================================ */

export const AVATARS = [
  { id: 'original', src: '/illustrations/avatar-art.jpg', bg: '#FFFFFF', fit: 'cover' },
  { id: 'astro', src: '/illustrations/astro-cat.png', bg: '#A697FF', fit: 'contain' },
  { id: 'bunny', src: '/illustrations/robot-bunny.png', bg: '#5CE8F5', fit: 'contain' },
  { id: 'flame', src: '/illustrations/flame-monster.png', bg: '#F5A5D8', fit: 'contain' },
  { id: 'chick', src: '/illustrations/chick-badge.png', bg: '#DEEC4E', fit: 'contain' },
  { id: 'gift', src: '/illustrations/gift-box.png', bg: '#F9C8F5', fit: 'contain' },
]

export const DEFAULT_AVATAR = 'original'
export const DEFAULT_NICKNAME = '用户昵称'
export const DEFAULT_SIGNATURE = '哈基米哈基米～'

export function Avatar({ id = DEFAULT_AVATAR, className = '' }) {
  const a = AVATARS.find((x) => x.id === id) || AVATARS[0]

  if (a.fit === 'cover') {
    return <img src={a.src} alt="" draggable={false} className={`h-full w-full object-cover ${className}`} />
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center ${className}`}
      style={{ backgroundColor: a.bg }}
    >
      <img src={a.src} alt="" draggable={false} className="h-[78%] w-[78%] object-contain" />
    </div>
  )
}