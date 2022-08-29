import { watch } from 'vue'
import store from '@/store'

export const watchLang = (...cbs) => {
  // 当前语言
  watch(
    () => store.getters.lang,
    () => {
      cbs.forEach((cb) => cb(store.getters.lang))
    },
    { deep: true }
  )
}
