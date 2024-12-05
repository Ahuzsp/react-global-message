# react-global-message
### 安装
`npm install react-global-message`

  或
   
`yarn add react-global-message`

### 在react项目的入口文件或者layout文件中

```tsx
import { MessageProvider } from 'react-global-message'
// 引入样式
import 'react-global-message/dist/message.css'
<html lang="en">
  <body>
    <MessageProvider>
      {children}
   </MessageProvider>
  </body>
</html>
```
### 在其他组件中使用
```tsx
// 引入useMessage
import { useMessage } from 'react-global-message'
const ClientApp = () => {
  const { showMessage } = useMessage()
  showMessage({ 'success message' })
  showMessage({ message: 'success message', duration: 3000 })
  showMessage({ type:'info', message: 'info message' })
  showMessage({ type:'error', message: 'error message' })
  return (
    <>/<>
  )
}
```
