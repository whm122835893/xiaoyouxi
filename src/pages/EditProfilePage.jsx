import React, { useState } from 'react'
import TabBar from '../components/TabBar.jsx'
import WechatCapsule from '../components/WechatCapsule.jsx'
import { Avatar, AVATARS, DEFAULT_NICKNAME } from '../components/avatar.jsx'

/* ================================================================
   「我的」子页面：个人信息
   可修改昵称、头像与个性签名，保存后同步回「我的」页
   ================================================================ */

const MAX_NICKNAME = 12
const MAX_SIGNATURE = 20

export default function EditProfilePage({ profile, onSave, onChange }) {
  const [nickname, setNickname] = useState(profile.nickname)
  const [avatar, setAvatar] = useState(profile.avatar)
  const [signature, setSignature] = useState(profile.signature)

  const trimmed = nickname.trim()
  const canSave = trimmed.length > 0

  const handleSave = () => {
    if (!canSave) return
    onSave({ nickname: trimmed, avatar, signature: signature.trim() })
    onChange('mine')
  }

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-page">
      <div className="no-bar flex-1 overflow-y-auto">
        <div className="relative overflow-hidden">
          {/* 顶部渐变（不铺小点） */}
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
            <h1 className="variety text-[21px] leading-none text-ink">个人信息</h1>
            <div className="absolute right-3 top-[14px]">
              <WechatCapsule />
            </div>
          </div>

          {/* 当前头像预览 */}
          <div className="relative flex flex-col items-center pb-[14px]">
            <div className="h-[96px] w-[96px] overflow-hidden rounded-full border-[3px] border-ink bg-white">
              <Avatar id={avatar} />
            </div>
            <p className="mt-[10px] text-[12px] font-semibold leading-none text-secondary">
              点击下方头像即可更换
            </p>
          </div>
        </div>

        <div className="space-y-3 px-3 pb-[92px]">
          {/* 头像选择 */}
          <div className="rounded-card border-[3px] border-ink bg-white px-3 py-[14px]">
            <h2 className="text-[15px] font-extrabold leading-none text-ink">选择头像</h2>
            <div className="mt-[14px] grid grid-cols-3 gap-y-[16px]">
              {AVATARS.map((a) => {
                const selected = a.id === avatar
                return (
                  <button
                    key={a.id}
                    type="button"
                    aria-label={`头像 ${a.id}`}
                    aria-pressed={selected}
                    onClick={() => setAvatar(a.id)}
                    className="tap flex justify-center"
                  >
                    <span
                      className={`relative block h-[64px] w-[64px] overflow-hidden rounded-full ${
                        selected ? 'border-[3px] border-lime-deep' : 'border-[2px] border-[#DCDCDC]'
                      }`}
                    >
                      <Avatar id={a.id} />
                      {selected && (
                        <span className="absolute bottom-0 right-0 flex h-[20px] w-[20px] items-center justify-center rounded-full border-[2px] border-ink bg-lime">
                          <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#1F1F1F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 13l5 5L20 6" />
                          </svg>
                        </span>
                      )}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 昵称修改 */}
          <div className="rounded-card border-[3px] border-ink bg-white px-3 py-[14px]">
            <div className="flex items-center justify-between">
              <h2 className="text-[15px] font-extrabold leading-none text-ink">修改昵称</h2>
              <span className="text-[11px] leading-none text-secondary">
                {trimmed.length}/{MAX_NICKNAME}
              </span>
            </div>
            <input
              type="text"
              value={nickname}
              maxLength={MAX_NICKNAME}
              placeholder={DEFAULT_NICKNAME}
              onChange={(e) => setNickname(e.target.value)}
              className="mt-[12px] h-[44px] w-full rounded-full border-[2px] border-ink bg-page px-[14px] text-[14px] font-semibold text-ink outline-none placeholder:text-[#B5B5B5]"
            />
            {!canSave && (
              <p className="mt-[8px] text-[11px] leading-none text-[#E05B5B]">昵称不能为空</p>
            )}
          </div>

          {/* 个性签名修改 */}
          <div className="rounded-card border-[3px] border-ink bg-white px-3 py-[14px]">
            <div className="flex items-center justify-between">
              <h2 className="text-[15px] font-extrabold leading-none text-ink">修改个性签名</h2>
              <span className="text-[11px] leading-none text-secondary">
                {signature.length}/{MAX_SIGNATURE}
              </span>
            </div>
            <input
              type="text"
              value={signature}
              maxLength={MAX_SIGNATURE}
              placeholder="说点什么吧～"
              onChange={(e) => setSignature(e.target.value)}
              className="mt-[12px] h-[44px] w-full rounded-full border-[2px] border-ink bg-page px-[14px] text-[14px] font-semibold text-ink outline-none placeholder:text-[#B5B5B5]"
            />
          </div>

          {/* UID（只读） */}
          <div className="flex items-center justify-between rounded-card border-[3px] border-ink bg-white px-3 py-[14px]">
            <span className="text-[14px] font-bold leading-none text-ink">UID</span>
            <span className="text-[14px] leading-none text-secondary">289181</span>
          </div>

          <button
            type="button"
            onClick={handleSave}
            disabled={!canSave}
            className={`w-full rounded-full border-[3px] border-ink py-[13px] text-[16px] font-extrabold leading-none text-ink ${
              canSave ? 'tap bg-lime active:bg-lime-deep' : 'bg-[#E4E4E4] text-[#9E9E9E]'
            }`}
          >
            保存
          </button>
        </div>
      </div>

      {/* 属于「我的」的子页面，保持「我的」为高亮态 */}
      <TabBar active="mine" onChange={onChange} />
    </div>
  )
}