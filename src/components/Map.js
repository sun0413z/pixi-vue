// 开始
import { ref, h, defineComponent } from "@vue/runtime-core";
import mapImg from "../../assets/map.jpg";
import { game } from "../Game";
export default defineComponent({
    setup() {
        const viewHeight = 1070;
        const mapy1 = ref(0);
        const mapy2 = ref(-viewHeight);
        const speed = 5;
        game.ticker.add(() => {
            mapy1.value += speed;
            mapy2.value += speed;
            // console.log(mapy1.value > viewHeight);
            // console.log(mapy2.value > viewHeight);
            if (mapy1.value > viewHeight) {
                mapy1.value = -viewHeight;
                // console.log(mapy1.value);
            }
            if (mapy2.value > viewHeight) {
                mapy2.value = -viewHeight;
            }
        })
        return {
            mapy1,
            mapy2,
        }
    },
    render(ctx) {
        return h("Container", [
            h('Sprite', { texture: mapImg, y: ctx.mapy1 }),
            h('Sprite', { texture: mapImg, y: ctx.mapy2 })
        ]);
    }
})