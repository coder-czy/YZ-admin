import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SkinOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Button, Tooltip, Avatar, theme, Dropdown } from 'antd'
import type { MenuProps } from 'antd'

import logo from '@/assets/logo.svg'
import './index.less'
import ThemeComp from './components/theme'

const { Header, Sider, Content } = Layout

const Layouts: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <span>首页</span>,
    },
    {
      key: '2',
      label: <span>个人信息</span>,
    },
    {
      key: '3',
      label: <span>修改密码</span>,
    },
    {
      type: 'divider',
    },
    {
      key: '4',
      label: <span>退出登录</span>,
    },
  ]
  const { token } = theme.useToken()

  // 侧边栏
  const [collapsed, setCollapsed] = useState(false)
  // 主题弹窗
  const [open, setOpen] = useState(false)
  const close = () => {
    setOpen(false)
  }

  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="logo" />
          {collapsed ? null : <h2>YZ ADMIN</h2>}
        </div>

        {/* 菜单 */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        {/* 头部 */}
        <Header className="header flx-justify-between">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="func-box flx-center">
            <Tooltip placement="bottom" title="主题配置">
              <SkinOutlined className="icon" onClick={() => setOpen(true)} />
            </Tooltip>
            <p className="username baseColor ellipsis">Yangzi</p>
            <Dropdown
              menu={{ items }}
              trigger={['click']}
              placement="bottom"
              arrow>
              <Avatar
                className="icon"
                style={{ backgroundColor: token.colorPrimary }}
                icon={<UserOutlined />}
              />
            </Dropdown>
          </div>
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>

      <ThemeComp open={open} close={close}></ThemeComp>
    </Layout>
  )
}

export default Layouts
