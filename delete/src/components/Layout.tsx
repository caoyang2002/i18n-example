// src/components/Layout.tsx
import React from 'react'
import Header from './Header' // 导入 Header 组件
import Footer from './Footer' // 导入 Footer 组件

// 定义 Layout 组件的 props 接口，用于接收子组件
interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* 包含 Head 组件来设置 head 标签内容 */}
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Application</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      {/* Header 组件 */}
      <Header />

      {/* Main 内容区域 */}
      <main className="container mx-auto px-4 pt-20">{children}</main>

      {/* Footer 组件 */}
      <Footer />
    </div>
  )
}

export default Layout
