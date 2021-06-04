    // 1.a
class Meme {
        id;
        name;
        image;
        dateModified;
    
        constructor(id, name, image, dateModified) {
            this.id = id;
            this.name = name;
            this.image = image;
            this.dateModified = dateModified;
        }
        show() {
    
            MemeShow.textContent = `name : ${this.name} , image : ${this.image}, dateModified: ${this.dateModified}`
        }
        update(data) {
            this.name = data.name;
            this.image = data.image;
            MemeShow.textContent = `name : ${this.name} , image : ${this.image}, dateModified: ${this.dateModified}`
        }
    }


    // 1.b
class MemeCollection {
    id;
    name;
    owner;
    memes;
    constructor(id, name, owner, memes) {
     this.id = id;
     this.name = name;
     this.owner = owner;
     this.memes = memes;
    }
    add(newMeme){
        if(newMeme instanceof Meme){
            collectionMeme.push(newMeme)
        }
        else{
            console.log('alo')
        }
    }
    update(id,data){
        for(let i = 0; i<collectionMeme.length;i++){
            if(id === collectionMeme[i].id){
                collectionMeme[i].name = data.name;
                collectionMeme[i].image = data.image;
                collectionMeme[i].dateModified = data.dateModified;
            }
            else{
                console.log('aloo')
            }
        }
    }
    delete(id){
        for(let i = 0; i<collectionMeme.length;i++){
            if(id === collectionMeme[i].id){
                collectionMeme.splice(i,1)
            }
        }
}

    show(){
        for(let i = 0; i<collectionMeme.length;i++){
            console.log(collectionMeme[i])
        }
    }
}

// 2
class Product {
    constructor(name, price, producer, sale) {
      this.id = getId();
      this.dateAdder = new Date();
      this.name = name;
      this.price = price;
      this.producer = producer;
      this.sale = sale;
    }
  }
  class HouseWare extends Product {
    constructor(name, price, producer, extend) {
      sale = 0.1;
      super(name, price, producer, sale);
      this.reliability = extend.reliability;
    }
  }
  class Clothes extends Product {
    constructor(name, price, producer, extend) {
      sale = 0.05;
      super(name, price, producer, sale);
      this.origin = extend.origin;
      this.material = extend.material;
    }
  }
  class Foods extends Product {
    constructor(name, price, producer, extend) {
      sale = 0.02;
      super(name, price, producer, sale);
      this.taste = extend.taste;
    }
  }
  
  let wareHouse = [];
  
  export class SellOfTheDay {
    constructor() {
      this.solds = [];
    }
  
    add(name, price, producer, extend) {
      switch (extend.type) {
        case "houseWare":
          wareHouse.push(new HouseWare(name, price, producer, extend));
          break;
        case "clothes":
          wareHouse.push(new Clothes(name, price, producer, extend));
          break;
        case "foods":
          wareHouse.push(new Foods(name, price, producer, extend));
          break;
        default:
      }
    }
    sell(product) {
      this.solds.push(product);
      wareHouse.splice(
        wareHouse.findIndex((item) => item.id === product.id),
        1
      );
    }
    total() {
      console.log(
        this.solds.reduce(
          (sum, product) => (sum += product.price - product.price * product.sale),
          0
        )
      );
    }
  }

//   3
// Web component là tập hợp các Web APIs cho phép chúng ta tạo ra một thẻ HTML riêng, mang các đặc tính riêng, đóng gói, có thể tái sử dụng. Web component được xây dựng trên chuẩn web hiện tại, vì thế đang (và sẽ) có thể hoạt động trên tất cả các trình duyệt, có thể tương thích với tất cả các library và framework Javascript có thể làm việc với HTML. Để dễ tưởng tượng thì nó giống như component của Angular hay React vậy, có điều component này phạm vi sử dụng là trình duyệt luôn, chứ ko gói gọn ở phạm vi framework nữa.

// Khi việc phát triển web tiếp tục trở nên ngày càng phức tạp, nó sẽ bắt đầu có ý nghĩa đối với các nhà phát triển như chúng ta bắt đầu trì hoãn ngày càng nhiều sự phát triển cho chính nền tảng web đã tiếp tục phát triển. Các đặc tả của Web Components là một bộ API cấp thấp sẽ tiếp tục phát triển và phát triển khi nhu cầu của chúng ta khi các nhà phát triển phát triển.

// Web Components bao gồm ba công nghệ riêng biệt được sử dụng cùng nhau:
// Custom Elements. Nói một cách đơn giản, đây là các thành phần HTML hợp lệ với các template, behaviors và tag name tùy chỉnh (ví dụ: <one-dialog> ) được tạo bằng một bộ API JavaScript. Các thành phần tùy chỉnh được mô tả trong custom-element.
// Shadow DOM. Có khả năng cô lập CSS và JavaScript, gần giống như <iframe> . Điều này được định nghĩa trong shadow-trees .
// HTML templates. Các template do người dùng xác định trong HTML không được hiển thị cho đến khi được gọi. Thẻ <template> được xác định trong template-element .
