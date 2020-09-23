// 开始
import { ref, h, defineComponent } from "@vue/runtime-core";
import enemyPlanImg from "../../assets/enemy.png";
export default defineComponent({
    setup() { },
    render(ctx) {
        return h("Container", [h('Sprite', { texture: enemyPlanImg })]);
    }
})