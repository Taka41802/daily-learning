ok = true && false;

オア演算子; //左側がtrueの場合は左側の値が返る
ok = true || false;
// 左側が空白なら右の値が返る
let username = "" || "User";

let username = "" ?? "User";
console.log(username);
("");

let x = "hello";
console.log(!!x);
true;

let temperature = 6;
let feeling = temperature >= 30 ? "暑い" : "寒い";
console.log(feeling);
寒い;

for (let i = 0; i < 3; i++) {
  console.log(i);
}
0;
1;
2;

try {
  throw "error";
  console.log("try");
} catch (error) {
  console.log(error);
}
error;

関数はオブジェクト;
関数宣言はオブジェクトを作り出している;
jsの内部のプロパティがあることによってオブジェクトは関数になる;

関数オブジェクトを作れる;
関数式を作ることができる;
let sayHi = function hi() {
  return "hi";
};
console.log(sayHI());

関数宣言と関数式の違い;
関数宣言;
巻き上げることがきる（宣言の前に実行できる）
関数式;
巻き上げることができない（宣言の後にしか使えない）

