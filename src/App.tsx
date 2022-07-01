import { defineComponent } from 'vue'

import { demoApi } from './apis'
import { download } from './utils'

export default defineComponent({
  name: 'App',
  setup() {
    async function handleExport() {
      const res = await demoApi.demoExport()

      download(res, '示例')
    }

    return {
      handleExport
    }
  },
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <button
          style={{
            width: '200px',
            height: '80px',
            fontSize: '28px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
          onClick={this.handleExport}
        >
          导出
        </button>
      </div>
    )
  }
})
