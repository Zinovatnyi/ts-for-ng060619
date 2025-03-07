"use strict";
// @Component()
// class Header {
//     @Input()
//     public value;
//
//     public constructor(
//         @Inject() http: HttpClient
//     ){}
//
//     @HostListener()
//     public click(event){
//
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function debounce(ms) {
    let timeout;
    return function (target, key, descriptor) {
        return {
            ...descriptor,
            value: (...args) => {
                timeout ? clearTimeout(timeout) : null;
                timeout = setTimeout(() => {
                    console.log(`Call ${key.toString()}(${args.join()})`);
                    timeout = null;
                    descriptor.value(...args);
                }, ms);
            }
        };
    };
}
class MathLib {
    areaOfCircle(r) {
        const result = Math.PI * r ** 2;
        console.log(result);
    }
}
__decorate([
    debounce(5000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MathLib.prototype, "areaOfCircle", null);
const lib = new MathLib();
lib.areaOfCircle(2);
lib.areaOfCircle(3);
lib.areaOfCircle(10);
lib.areaOfCircle(16);
lib.areaOfCircle(22);
