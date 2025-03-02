import { mockNotes } from '@/store/mocks'
import { useState } from 'react'

export const useNotesList = ({ onSelect }: { onSelect?: () => void }) => {
  const notes = mockNotes

  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number>(0)

  const handleNoteSelect = (index: number) => async (): Promise<void> => {
    setSelectedNoteIndex(index)

    if (onSelect) {
      onSelect()
    }
  }

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect
  }
}
