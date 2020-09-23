// 开始
import { h, defineComponent, reactive } from "@vue/runtime-core";
import Map from "../components/Map";
import Plane from "../components/Plane";
import EnemyPlane from "../components/EnemyPlane";
import { game } from "../Game";
import { hitTestObject } from "../utils";
export default defineComponent({
    setup() {
        /*
        *入口
        *创建响应式数据   ref  &&  reactive
        * ref =>  string number
        *reactive =>  object  array
        */
        const { planeInfo } = useCreatePlane();
        const { enemyplanes, moveEnemyPlanes } = useCreateEnemyPlane();
        game.ticker.add(() => {
            moveEnemyPlanes()
            enemyplanes.forEach((enemyPlaneInfo) => {
                debugger
                if (hitTestObject(enemyPlaneInfo, planeInfo)) {
                    console.log('hit');

                }
            });
        })
        return {
            enemyplanes,
            planeInfo,
        }
    },
    render(ctx) {
        const createEnemyPlanes = () => {
            return ctx.enemyplanes.map((info) => {
                return h(EnemyPlane, { x: info.x, y: info.y });
            })
        }
        return h("Container", [
            h(Map),
            h(Plane, { x: ctx.planeInfo.x, y: ctx.planeInfo.y }),
            ...createEnemyPlanes()
        ]);
    },
})
// 创建敌机
function useCreateEnemyPlane() {
    const enemyplanes = reactive([
        {
            x: 0,
            y: 50,
            width: 308,
            height: 207
        }
    ])
    const moveEnemyPlanes = () => {
        enemyplanes.forEach((enemyPlaneInfo) => {
            enemyPlaneInfo.y += 5
        })
    }
    return {
        enemyplanes,
        moveEnemyPlanes
    }
}
// 创建我方飞机
function useCreatePlane() {
    const planeInfo = reactive({ x: 150, y: 450, width: 258, height: 364 });
    const speed = 10
    window.addEventListener('keydown', (e) => {
        switch (e.code) {
            case 'ArrowUp':
                planeInfo.y -= speed;
                break;
            case 'ArrowDown':
                planeInfo.y += speed;
                break;
            case 'ArrowLeft':
                planeInfo.x -= speed;
                break;
            case 'ArrowRight':
                planeInfo.x += speed
                break;
            default:
                break;
        }
    })
    return {
        planeInfo,
    }
}