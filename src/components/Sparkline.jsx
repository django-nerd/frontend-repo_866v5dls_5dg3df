import { useMemo } from 'react'

export default function Sparkline({ values = [], width = 120, height = 40, color = '#f99616' }) {
  const points = useMemo(() => {
    if (!values.length) return ''
    const max = Math.max(...values)
    const min = Math.min(...values)
    const len = values.length - 1
    return values
      .map((v, i) => {
        const x = (i / len) * (width - 8) + 4
        const y = height - 4 - ((v - min) / (max - min || 1)) * (height - 8)
        return `${x},${y}`
      })
      .join(' ')
  }, [values, width, height])

  const last = values[values.length - 1]
  const first = values[0]
  const trendUp = last >= first

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        points={points}
      />
      {values.length > 0 && (
        <circle cx={width - 4} cy={height / 2} r="0" fill="transparent">
          <title>{trendUp ? 'Upward trend' : 'Downward trend'} • Last: {last}</title>
        </circle>
      )}
    </svg>
  )
}
