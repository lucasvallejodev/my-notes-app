import { Content, NotePreviewList, RootLayout, SideBar } from '@/components'
import { ActionButtonsRow } from './components/ActionButtonsRow'

function App(): JSX.Element {
  return (
    <RootLayout>
      <SideBar className="p-2 bg-zinc-900/95">
        <ActionButtonsRow />
        <NotePreviewList />
      </SideBar>
      <Content className="border-l bg-zinc-900 border-l-white/20">Content</Content>
    </RootLayout>
  )
}

export default App
