import SvgIcon from '@/components/svgIcon'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

type Props = {
  name: string
  title: string
}

const ErrPage = ({ name = '400', title = '' }: Props) => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/home')
  }
  return (
    <>
      <SvgIcon name={name} />
      <h2>{title}</h2>
      <Button onClick={goHome}>返回首页</Button>
    </>
  )
}

export default ErrPage
