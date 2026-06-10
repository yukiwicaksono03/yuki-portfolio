interface FolderIconProps {
  color?: string
  size?: number
  isFile?: boolean
}

export function FolderIcon({ color = '#0a84ff', size = 56, isFile = false }: FolderIconProps) {
  if (isFile) {
    return (
      <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="4" width="32" height="40" rx="3" fill="#636366" />
        <path d="M32 4L40 14H32V4Z" fill="#3a3a3c" />
        <rect x="14" y="20" width="20" height="2" rx="1" fill="rgba(255,255,255,0.3)" />
        <rect x="14" y="26" width="16" height="2" rx="1" fill="rgba(255,255,255,0.3)" />
        <rect x="14" y="32" width="18" height="2" rx="1" fill="rgba(255,255,255,0.3)" />
      </svg>
    )
  }

  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 56 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Folder back */}
      <path
        d="M0 8C0 5.79086 1.79086 4 4 4H22L27 10H52C54.2091 10 56 11.7909 56 14V40C56 42.2091 54.2091 44 52 44H4C1.79086 44 0 42.2091 0 40V8Z"
        fill={color}
        opacity="0.9"
      />
      {/* Folder tab */}
      <path
        d="M0 8C0 5.79086 1.79086 4 4 4H22L26 10H0V8Z"
        fill={color}
      />
      {/* Shine */}
      <path
        d="M0 10H56V16C56 16 46 18 28 18C10 18 0 16 0 16V10Z"
        fill="rgba(255,255,255,0.08)"
      />
    </svg>
  )
}
