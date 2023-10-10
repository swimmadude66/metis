export interface BaseAction {
  name: string
  id: string
  inputs: Record<string, any>
  outputs: Record<string, any>
  description?: string
  flags: number
  icons?: {
    format: string
    src: string
    size: number // eg Square width/height
  }[]
  extra?: Record<string, any>
}

export interface EditorAction extends BaseAction {

  editor: React.FC
}

