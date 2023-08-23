type Props = {
  name: string
  iconStyle?: { [key: string]: any }
}

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
