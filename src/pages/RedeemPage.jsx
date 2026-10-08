import React, { useState } from 'react'
import TabBar from '../components/TabBar.jsx'
import WechatCapsule from '../components/WechatCapsule.jsx'
import { FourStar, CircleArrow } from '../components/icons.jsx'
import { PrizeArt } from '../components/prizeArt.jsx'

/* ---------------- 奖品数据 ---------------- */
const ITEMS = [
  { id: 'coupon', name: '5 元无门槛券', desc: '全场通用', points: 500, bg: '#DEEC4E', variant: 'coupon' },
  { id: 'coin', name: '游戏币 x100', desc: '游乐场通用', points: 300, bg: '#5CE8F5', variant: 'coin' },
  { id: 'sticker', name: '谷灵贴纸包', desc: '限定款 6 张', points: 800, bg: '#F5A5D8', variant: 'sticker' },
  { id: 'dice', name: '抽奖券 x1', desc: '幸运大转盘', points: 200, bg: '#F9C8F5', variant: 'dice' },
  { id: 'frame', name: '限定头像框', desc: '永久有效', points: 1200, bg: '#FFD54F', variant: 'frame' },
  { id: 'vip', name: '会员体验卡', desc: '30 天权益', points: 1500, bg: '#A697FF', variant: 'vip' },
  { id: 'bag', name: '谷灵帆布袋', desc: '定制周边', points: 3000, bg: '#B8F0E0', variant: 'bag' },
  { id: 'figure', name: '宇航猫手办', desc: '限量周边', points: 5000, bg: '#DEEC4E', variant: 'figure' },
]

/* ---------------- 奖品卡 ---------------- */
function RedeemCard({ item, redeemed, onRedeem }) {
  return (
    <div className="relative flex flex-col rounded-card border-[3px] border-ink bg-white px-[10px] pb-[11px] pt-[12px]">
      <span
        className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-[2.5px] border-ink"
        style={{ backgroundColor: item.bg }}
      >
        <PrizeArt variant={item.variant} />
      </span>
      <p className="mt-[10px] text-center text-[14px] font-extrabold leading-tight text-ink">{item.name}</p>
      <p className="mt-[3px] text-center text-[11px] leading-none text-secondary">{item.desc}</p>
      <div className="mt-[10px] flex items-center justify-between">
        <span className="flex items-center gap-[2px] text-[15px] font-extrabold leading-none text-ink">
          {item.points}
          <span className="text-[10px] font-bold text-secondary">积分</span>
        </span>
        <button
          type="button"
          disabled={redeemed}
          onClick={() => onRedeem(item.id)}
          className={`tap rounded-full border-[2px] border-ink px-[12px] py-[5px] text-[12px] font-extrabold leading-none ${
            redeemed ? 'bg-[#EDEDED] text-secondary' : 'bg-lime text-ink'
          }`}
        >
          {redeemed ? '已兑换' : '兑换'}
        </button>
      </div>
    </div>
  )
}

/* ---------------- 页面 ---------------- */
export default function RedeemPage({ active, onChange }) {
  const [redeemed, setRedeemed] = useState([])

  const handleRedeem = (id) => {
    setRedeemed((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-page">
      <div className="no-bar flex-1 overflow-y-auto">
        <div className="relative overflow-hidden">
          {/* 顶部渐变 + 白色波点 */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-lime-top via-[#E2EFA6] to-page">
            <div className="dots-white absolute inset-0" />
          </div>

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
            <h1 className="variety text-[21px] leading-none text-ink">积分兑换</h1>
            <div className="absolute right-3 top-[14px]">
              <WechatCapsule />
            </div>
          </div>

          {/* 积分余额 */}
          <div className="px-3">
            <div className="relative rounded-card border-[3px] border-ink bg-lime checker px-3 py-[14px]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[12px] font-semibold leading-none text-ink/70">我的积分</p>
                  <p className="mt-[7px] text-[30px] font-extrabold leading-none text-ink">97112</p>
                </div>
                <button
                  type="button"
                  className="tap flex items-center gap-[6px] rounded-full border-[2px] border-ink bg-white py-[6px] pl-[13px] pr-[7px] text-[12px] font-bold leading-none text-ink"
                >
                  积分明细
                  <CircleArrow size={20} bg="bg-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 好礼列表 */}
        <div className="px-3 pb-[92px] pt-[14px]">
          <div className="flex items-center gap-[7px]">
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] border-[2px] border-ink bg-ink">
              <FourStar size={16} color="#DFED5C" />
            </span>
            <h2 className="variety text-[19px] leading-none text-ink">精选好礼</h2>
            <span className="mt-[2px] text-[11px] font-semibold leading-none text-secondary">
              多种福利 任你兑换
            </span>
          </div>

          <div className="mt-[12px] grid grid-cols-2 gap-[12px]">
            {ITEMS.map((item) => (
              <RedeemCard
                key={item.id}
                item={item}
                redeemed={redeemed.includes(item.id)}
                onRedeem={handleRedeem}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 属于「我的」的子页面，保持「我的」为高亮态 */}
      <TabBar active="mine" onChange={onChange} />
    </div>
  )
}