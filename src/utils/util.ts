/** 导出 */
export function download(data: any, name: string) {
  const blob = new Blob([data], {
    type: 'application/vnd.openxmlformats;charset=utf-8'
  })
  const href = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.style.display = 'none'
  a.href = href
  a.download = `${name}.xlsx`
  a.click() //触发下载
  URL.revokeObjectURL(a.href)
}
