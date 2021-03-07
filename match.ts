// @ts-ignore
export const match = <R>(tests: [boolean, R][]): R => tests.filter(([test])=>test).map(([_,value])=>value)[0];
export const zip = <T,U>(a1: T[], a2: U[]): [T,U][] => a1.map((e,i)=>[e,a2[i]]);
export interface Constructable<T> {
    new(...args: any[]): T;
}
