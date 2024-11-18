// 1. 쇼핑 카트의 총 금액 계산하기
const cart = [
    { item: " 노트북 ", price: 1200000, quantity: 1 },
    { item: " 마우스 ", price: 35000, quantity: 2 },
    { item: " 키보드 ", price: 89000, quantity: 1 }
   ];

   let totalPrice = 0;

   // for 반복문
   for (let i=0; i<cart.length; i++) {
        totalPrice += cart[i].price*cart[i].quantity;
   }
   console.log(`totalPrice = ${totalPrice}`);

   totalPrice = 0;

   // forEach 함수
   cart.forEach( goods=> {
    totalPrice += goods.price * goods.quantity;
   }
   );
   console.log(`totalPrice = ${totalPrice}`);

   // reduce 함수
   totalPrice = cart.reduce((sum, goods) => sum+goods.price*goods.quantity, 0
   );
   console.log(`totalPrice = ${totalPrice}`);

   // map 함수
    const itemTotals = cart.map( goods =>({
        item: goods.item, total: goods.price * goods.quantity
    }));
    console.log('totalPrice =', itemTotals);



    // 2. 이름 목록 변환하기
    const names = ['alice', 'bob', 'charlie'];
    const uppercasedNames = names.map( n => n.toUpperCase()
    );
    console.log(`upper cased names: ${uppercasedNames}`);

    const capitalStartnames = names.map( 
        n => n[0].toUpperCase() + n.slice(1)
    );
    console.log(`capitalStartnames: ${capitalStartnames}`);