export interface EditorState {
  code: string
  init(code: string): void
  setProp(): void
}

export default function useEditor() {
  return {} as const
}
