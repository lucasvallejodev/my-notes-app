import { Content, RootLayout, SideBar } from '@/components'

function App(): JSX.Element {
  return (
    <RootLayout>
      <SideBar className="p-2 border-4 border-blue-500 text-blue-500">Side Bar</SideBar>
      <Content className="p-2 border-4 border-red-500 text-red-500">Content</Content>
    </RootLayout>
  )
}

export default App
