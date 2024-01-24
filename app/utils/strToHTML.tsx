
export function strToHTML(str: string) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: str,
      }}
    />
  )
}