// 开始
import { toRefs, watch, ref, h, defineComponent, reactive } from "@vue/runtime-core";
import planeImg from "../../assets/plane.png";
export default defineComponent({
    props: ['x', 'y'],
    setup(props) {
        /*
        *方案1：
        */
        // const point = reactive({ x: props.x, y: props.y })
        // watch(props, (value) => {
        //     // console.log(value);
        //     point.x = value.x
        //     point.y = value.y
        // })
        // return {
        //     point
        // }
        // 响应式丢失
        // 解构响应式对象
        const { x, y } = toRefs(props)
        return {
            x,
            y
        }
    },
    render(ctx) {
        return h("Container", { x: ctx.x, y: ctx.y }, [h('Sprite', { texture: planeImg })]);
    }
})