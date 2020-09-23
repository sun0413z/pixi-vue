// export default {
//     data() { }
// }
import { ref, computed, defineComponent, h } from '@vue/runtime-core'
import StartPage from './page/Startpage'
import GamePage from './page/Gamepage'
// template ->render
export default defineComponent({
    setup() {
        // ref 创建响应式对象
        const currentPageName = ref('GamePage')
        // console.log(currentPageName);
        // 计算属性
        const currentPage = computed(() => {
            if (currentPageName.value == 'StartPage') {
                return StartPage;
            } else if (currentPageName.value == 'GamePage') {
                return GamePage;
            }
        })
        return {
            currentPage,
            currentPageName
        }
    },
    render(ctx) {
        return h("Container", [h(ctx.currentPage, {
            onChanagePage(page) {
                // console.log(page);
                ctx.currentPageName = page;
            }
        })])
        // return h("Container", [h(Gamepage)])
    }
})  