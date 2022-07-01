import { Api, Post, useContext } from '@midwayjs/hooks'
import { Context } from '@midwayjs/koa'
import ExcelJS from 'exceljs'
import path from 'path'

export const demoExport = Api(Post(), async () => {
  const ctx = useContext<Context>()

  const wb = new ExcelJS.Workbook()
  const ws = wb.addWorksheet('Demo')

  ws.columns = [{ header: '编号', key: 'id' }]
  ws.addRows([{ id: 1 }, { id: 2 }])

  // 写入的文件可以打开
  wb.xlsx.writeFile(path.resolve('./demo.xlsx'))

  // 返回的 buffer 无法打开
  const buffer = await wb.xlsx.writeBuffer()

  ctx.set('content-type', 'application/vnd.openxmlformats;charset=utf-8')
  ctx.set('content-disposition', `attachment; filename=demo.xlsx`)

  ctx.body = buffer
})
