import React from 'react'
import TabBar from '../components/TabBar.jsx'
import { FourStar, CatFace, FemaleIcon } from '../components/icons.jsx'
import { FeatureIcon } from '../components/featureIcons.jsx'
import { AvatarArt, FlameMonster, AstroCat, GiftBox } from '../components/Illustrations.jsx'

/* ---------------- 头像 ---------------- */
function AvatarBlock() {
  return (
    <div className="h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full border-[3px] border-ink bg-white">
      <AvatarArt className="h-full w-full" />
    </div>
  )
}

/* ---------------- 2. 用户信息区 ---------------- */
// 顶部 header 已移除，用 pt-8 让头像与昵称整体下移，避开页面最上沿
function UserInfo() {
  return (
    <div className="relative px-3 pb-3 pt-8">
      {/* 水印：variety 有 skewX 倾斜，留出 right-2 内缩避免包围盒撑出横向滚动 */}
      <span className="variety pointer-events-none absolute right-2 top-[6px] text-[62px] leading-none text-white/60">
        HAVE
      </span>

      <div className="relative flex gap-3">
        <AvatarBlock />

        <div className="min-w-0 flex-1">
          {/* 昵称行 */}
          <div className="flex items-center gap-[5px]">
            <span className="text-[24px] font-extrabold leading-none tracking-tight text-ink">
              用户昵称
            </span>
            <FourStar size={16} className="mt-[-4px]" />
            <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full border-[2px] border-[#C9C9C9] bg-[#EDEDED] text-[12px] font-extrabold leading-none text-[#8A8A8A]">
              G
            </span>
            <span className="flex shrink-0 items-center gap-[4px] rounded-full border-[2px] border-ink bg-purple-light px-[8px] py-[3px] text-[12px] font-bold leading-none text-ink">
              <CatFace size={13} />
              信物达人
            </span>
          </div>

          {/* UID 行 */}
          <div className="mt-[7px] flex items-center gap-[7px]">
            <span className="text-[13px] font-medium leading-none text-ink/80">UID:289181</span>
            <FemaleIcon size={18} />
          </div>

          {/* 签名条 */}
          <div className="mt-[10px] flex items-center gap-[7px]">
            <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[9px] border-[2px] border-ink bg-ink">
              <FourStar size={16} color="#DFED5C" />
            </span>
            <div className="flex h-[32px] flex-1 items-center rounded-full border-[2.5px] border-ink bg-white px-[14px]">
              <span className="text-[13px] font-medium leading-none text-ink">哈基米哈基米～</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------- 3. 基础信息卡 ---------------- */
const STATS = [
  { value: '189', label: '我的奖品' },
  { value: '6', label: '粉丝' },
  { value: '3008', label: '点赞' },
  { value: '97112', label: '积分' },
]

function BasicInfoCard() {
  // checker 会占用 background-image，故底色用纯色（与首页绿色卡一致）
  return (
    <div className="relative rounded-card border-[3px] border-ink bg-lime-deep checker px-3 pb-3 pt-[10px]">
      <div className="relative flex items-center justify-between gap-3">
        <div className="relative min-w-0 flex-1">
          <h3 className="variety stroke-ink whitespace-nowrap text-[21px] leading-none text-white">基础信息</h3>
          <span className="mt-[3px] block h-[5px] w-[58px] -skew-x-[30deg] rounded-full bg-pink" />
          <span className="variety absolute -bottom-[6px] left-0 whitespace-nowrap text-[26px] leading-none text-white/45">
            BASIC&nbsp;INFORMATION
          </span>
        </div>
        {/* 火焰小怪兽：缩小后与标题同排，收在卡片边框内 */}
        <FlameMonster className="h-[54px] w-auto shrink-0" />
      </div>

      <div className="relative mt-[26px] grid grid-cols-4 rounded-panel bg-white py-[10px]">
        {STATS.map((s) => (
          <div key={s.label} className="tap flex flex-col items-center">
            <span className="text-[21px] font-extrabold leading-none text-ink">{s.value}</span>
            <span className="mt-[5px] text-[12px] leading-none text-secondary">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------------- 4. 积分兑换 Banner ---------------- */
function ActivityBanner({ onRedeem }) {
  return (
    <button
      type="button"
      onClick={onRedeem}
      className="tap relative block h-[104px] w-full overflow-hidden rounded-card border-[3px] border-ink bg-gradient-to-br from-purple-light to-purple px-3 text-left"
    >
      {/* 马赛克叠在紫色渐变之上（checker 与渐变都用 background-image，不能同层） */}
      <div className="checker pointer-events-none absolute inset-0" />
      <div className="relative flex h-full items-center">
        <div className="relative">
          <h3 className="variety stroke-ink-2 text-[27px] leading-none text-white">
            积分<span className="text-star">兑换</span>
          </h3>
          <div className="mt-[11px] flex items-center gap-2">
            <span className="inline-block -skew-x-[12deg] rounded-[4px] border-[2px] border-ink bg-ink px-[10px] py-[4px] text-[11px] font-bold leading-none text-white">
              多种福利 任你兑换&gt;&gt;
            </span>
            <FourStar size={14} />
          </div>
        </div>
        <GiftBox className="ml-auto h-[64px] w-auto shrink-0 pr-2" />
      </div>
    </button>
  )
}

/* ---------------- 5. 常用功能卡 ---------------- */
const FEATURES = [
  { name: '设置', icon: 'settings' },
  { name: '头像框', icon: 'avatarFrame' },
  { name: '客服', icon: 'service' },
  { name: '个人信息', icon: 'profile' },
]

function FunctionsCard() {
  return (
    <div className="relative rounded-card border-[3px] border-ink bg-lime-btn checker px-3 pb-3 pt-[10px]">
      <div className="relative flex items-center justify-between gap-3">
        <div className="relative min-w-0 flex-1">
          <h3 className="variety whitespace-nowrap text-[23px] leading-none text-ink">常用功能</h3>
          <span className="mt-[3px] block h-[5px] w-[52px] -skew-x-[30deg] rounded-full bg-pink" />
          <p className="mt-[3px] text-[11px] font-semibold italic leading-none text-secondary">
            Basic&nbsp;Information
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className="-skew-x-[12deg] rounded-[4px] border-[2px] border-ink bg-star px-[8px] py-[2px] text-[11px] font-bold leading-none text-ink">
            WOW~
          </span>
          {/* 宇航猫：缩小后与标题同排，收在卡片边框内 */}
          <AstroCat className="h-[54px] w-auto" />
        </div>
      </div>

      <div className="relative mt-[14px] grid grid-cols-4 gap-y-[18px] rounded-panel bg-white py-[16px]">
        {FEATURES.map((f) => (
          <button key={f.name} type="button" className="tap flex flex-col items-center gap-[7px]">
            <FeatureIcon name={f.icon} size={34} />
            <span className="text-[12px] leading-none text-ink">{f.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

/* ---------------- 页面 ---------------- */
export default function ProfilePage({ active, onChange }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-page">
      <div className="no-bar flex-1 overflow-x-hidden overflow-y-auto">
        <div className="relative">
          {/* 顶部渐变（背景不铺小点，小点只保留在卡片边框内） */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[250px] bg-gradient-to-b from-lime-top via-[#E2EFA6] to-page" />

          <UserInfo />
        </div>

        <div className="space-y-3 px-3 pb-[92px] pt-3">
          <BasicInfoCard />
          <ActivityBanner onRedeem={() => onChange('redeem')} />
          <FunctionsCard />
        </div>
      </div>

      <TabBar active={active} onChange={onChange} />
    </div>
  )
}