/* eslint-disable @typescript-eslint/no-unused-vars */

//型が合っていない時や型がない時にエラーが出せる
//TypeScriptの基本の型

//boolean
let bool: boolean = true;

//number
let num: number = 0;

//string
let str: string = "A";

//Array
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

//tuple(使い道は謎)
let tuple: [number, string] = [0, "A"];

//any(何を入れてもよい型。使う意味がないためなるべく使うのは避ける)
let any1: any = false;

/*void(returnされていない関数に設定される。
  わざわざ指定せずとも勝手にreturnがなければ指定してくれるためつけなくても良い)*/
const func1 = (): void => {
  const test = "Test";
};

//null
//nullは意図的に作らないと発生しないリテラル(配列やオブジェクトなどの直接記述される固定値)であるため変数に指定できない
let null1: null = null;

//undefined
//undefindは自然発生する変数であるため、変数に設定できる
let undefined1: undefined = undefined;

//object(objectとして設定する時と中身を設定する時がある)
let obj1: object = { id1: 0, id2: 1 };
let obj2: { id: number; name: string } = { id: 0, name: "aa" };
