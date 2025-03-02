import { ActionButton, ActionButtonProps } from '@/components'
import { FaFileSignature } from 'react-icons/fa'

export const NewNoteButton = ({ ...props }: ActionButtonProps): JSX.Element => {
  const handleCreation = (): void => {
    // TODO: Implement
  }

  return (
    <ActionButton onClick={handleCreation} {...props}>
      <FaFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
