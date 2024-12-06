# react-global-message
### Install
`npm install react-global-message`

  or
   
`yarn add react-global-message`

### Configure in the entrance file

```tsx
import { MessageProvider } from 'react-global-message'
// import message style
import 'react-global-message/dist/message.css'
<html lang="en">
  <body>
    <MessageProvider>
      {children}
   </MessageProvider>
  </body>
</html>
```
### Use in other components
```tsx
// import useMessage
import { useMessage } from 'react-global-message'
const ClientApp = () => {
  const { showMessage } = useMessage()
  showMessage({ 'success message' })
  showMessage({ message: 'success message', duration: 2000 })
  showMessage({ type:'info', message: 'info message' })
  showMessage({ type:'error', message: 'error message', duration: 3000 })
  return (
    <>/<>
  )
}
```
