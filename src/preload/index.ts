import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolated must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO expose
  })
} catch (error) {
  console.error(error)
}
