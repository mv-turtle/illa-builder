export interface WrappedImageProps {
  src: string
  altText: string
  tooltipText: string
  radius: string
  width: string
  height: string
  handleUpdateDsl: (value: Record<string, string>) => void
}
