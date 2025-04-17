/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace MyExtension {
    /**
     * Say hello
     */
    //% block
    export function sayHello(): void {
        basic.showString("Hello!")
    }
}
