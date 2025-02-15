let a = "a",
  b = "b";
c = "c";

for文でiはよく使われる

for-of文
const fruits = ['apple','banana','grape','orange','mango']
for (let i = 0;i < fruits.length; i += 1) {
  console.log(fruits[i])
}

for (const fruit of fruits) {
  console.log(fruit);
}

for-in文
const coffee = {
  name: 'Caffe Latte',
  size: 350,
  isHot: true,
};

for (const key in coffee) {
  console.log(key);
}