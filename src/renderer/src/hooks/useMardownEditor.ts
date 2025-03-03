import { MDXEditorMethods } from '@mdxeditor/editor'
import { throttle } from 'lodash'
import { useRef } from 'react'

export const useMarkdownEditor = () => {
  const editorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSaving = throttle(
    async (content: string) => {
      console.info('Auto saving:', content)
    },
    3000,
    {
      leading: false,
      trailing: true
    }
  )

  const handleBlur = async (): Promise<void> => {
    handleAutoSaving.cancel()

    const content = editorRef.current?.getMarkdown()

    if (content != null) {
      // save note
    }
  }

  return {
    editorRef,
    handleAutoSaving,
    handleBlur
  }
}
