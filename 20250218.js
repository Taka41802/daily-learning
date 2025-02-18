sayHi = function (name) {
  return "Hi ${name}!";
};
アロー関数;
sayHi = (name) => {
  return "Hi ${name}!";
};

3つの違い
・一つの式をリターンする場合、{}とreturnを消せる
  sayHi = (name) => "Hi ${name}!";
・パラメーターが一つの場合()を省略することができる
  sayHi = name => "Hi ${name}!";
・ディスについて違う？後に説明

sayHi = (name) => "Hi ${name}!";
console.log(sayHi()); //undefinedになる