export function hitTestObject(objA, objB) {
    debugger
    return (
        objA.x + objA.width >= objB.x &&
        objB.x + objB.width >= objA.x &&
        objA.x + objA.height >= objB.y &&
        objB.x + objB.height >= objA.y
    )
}