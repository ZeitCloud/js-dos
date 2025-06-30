const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  apiKey: process.env.OPENAI_API_KEY || ''
});
