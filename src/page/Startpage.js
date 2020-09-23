// 开始
import { h, defineComponent } from "@vue/runtime-core";
import startPageImg from "../../assets/startPage.jpg";
import startBtn from "../../assets/startBtn.png";
export default defineComponent({
    setup(props, ctx) {
        const handleClick = () => {
            ctx.emit('chanagePage', 'GamePage')
        }
        return {
            handleClick
        }
    },
    render(ctx) {
        return h("Container", [
            h('Sprite', { texture: startPageImg }),
            h('Sprite', {
                texture: startBtn, x: 225, y: 510,
                interactive: true,
                onClick: ctx.handleClick
            })
        ]);
    }
})