文と式
式　変数の代入時に右辺にかけるもの
　　例　
文（宣言）　実行すると何かをするもの
　　例　if elseなど

{
  const hello ='hello'
}

デットゾーン
const hello ='hello2'
{
  console.log(hello);  //ここがデットゾーンになる
  const hello ='hello1';
}

if (ok) {}        //if文後はブロック文が来ているに過ぎない

三項演算子　真偽値により返すものが違う
ok = ok ? 'OK' : 'NO'
console.log(ok);

function vegetableColor(vegetable) {
  switch (vegetable) {
    case 'tomato':
      console.log('tomato is red!');
      break;
    case 'carrot':
    case 'pumpkin':
      console.log('pumpkin is orenge!');
      break;
    case 'onion':
      console.log('onion is white!');
      break;
    default:
      console.log('not found');
  }
  //  if (vegetable === 'tomato') {
  //   console.log('tomato is red!');
  //  }else if (vegetable === 'pumpkin') {
  //   console.log('pumpkin is orenge!');
  //  }else if (vegetable === 'onion') {
  //   console.log('onion is white!');
  //  }
}
vegetableColor('tomato');

let count = 0;
while (count < 10) {
  console.log(count);
  count += 1;
}

let tomatoCount = 0;
do {
  console.log(tomatoCount);
  tomatoCount += 1;
} while (tomatoCount < 10);

let pumpkinCount; //for文の中に書くことが多い
for (let pumpkinCount = 1;pumpkinCount < 10; pumpkinCount += 1) {
  console.log(pumpkinCount);
}

