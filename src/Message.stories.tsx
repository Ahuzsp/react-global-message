import * as React from 'react';


import { MessageProvider, useMessage } from './index';

export default {
  title: 'Components/MessageProvider',
  component: MessageProvider,
};

const ClientApp = () => {
  const { showMessage } = useMessage()
  return (
    <div style={{padding: '20px'}}>
      <button onClick={() => showMessage({message:'success message', duration:30000})}>success</button>
      <button onClick={() => showMessage({type:'error', message:'error message',})}>error</button>
      <button onClick={() => showMessage({type:'warning', message:'warning message', duration:30000})}>warning</button>
      <button onClick={() => showMessage({type:'info', message:'info message', duration:30000})}>info</button>
    </div>
  )
}

export const Default = () => {
  return (
  <MessageProvider>
    <ClientApp />
  </MessageProvider>
  )
};