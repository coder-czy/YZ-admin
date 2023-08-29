type Props = {
  name: string
  iconStyle?: { [key: string]: any }
}

/**
 *
 * @param param
 * {
 * name svg文件名称
 * iconStyle 样式
 * }
 * @returns
 */
function SvgIcon({
  name,
  iconStyle = { width: '100px', height: '100px' },
}: Props) {
  const symbolId = `#icon-${name}`
  return (
    <svg aria-hidden="true" style={iconStyle}>
      <use href={symbolId} />
    </svg>
  )
}

export default SvgIcon
