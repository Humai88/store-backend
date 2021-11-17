import Product from "./model/product";
import { Category } from "./type";

import {
  xboxDescription,
  airpodsDescription,
  airtagDescription,
} from "./items/descriptions";
import AttributeSet, { AttributeType } from "./model/attribute-set";
import Attribute from "./model/attribute";

const shoeSizes = new AttributeSet("Size").addItemList([
  new Attribute("40"),
  new Attribute("41"),
  new Attribute("42"),
  new Attribute("43"),
]);

const clothesSizes = new AttributeSet("Size").addItemList([
  new Attribute("Small", "S"),
  new Attribute("Medium", "M"),
  new Attribute("Large", "L"),
  new Attribute("Extra Large", "XL"),
]);

const colors = new AttributeSet("Color")
  .setType(AttributeType.swatch)
  .addItemList([
    new Attribute("Green", "#44FF03"),
    new Attribute("Cyan", "#03FFF7"),
    new Attribute("Blue", "#030BFF"),
    new Attribute("Black", "#000000"),
    new Attribute("White", "#FFFFFF"),
  ]);

const yesNo = [new Attribute("Yes"), new Attribute("No")];

const capacity = new AttributeSet("Capacity").addItemList([
  new Attribute("512G"),
  new Attribute("1T"),
]);

const products: Product[] = [
  new Product("Denim Jacket")
    .setId("zara-jacket")
    .setPrice(130)
    .addImages([
      "https://i.ibb.co/tHTJYDL/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/ZdK4q2L/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/dkmYSDN/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
    ])
    .addAttributeSet(clothesSizes)
    .setBrand("Zara")
    .setDescription("<p>Awesome denim coat made using orgaic cotton</p>")
    .setCategory(Category.clothes),

  new Product("Leather Jacket")
    .setId("mango-leather-jacket")
    .setPrice(430)
    .addImages([
      "https://i.ibb.co/wNjktWG/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/Kq8x1GW/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/MNSLk39/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
    ])
    .addAttributeSet(clothesSizes)
    .setBrand("Mango")
    .setDescription("<p>Awesome black rocy leather jacket</p>")
    .setCategory(Category.clothes),

  new Product("Casual Dress")
    .setId("mango-casual-dress")
    .setPrice(110)
    .setDescription("<p>Best choise for everyday</p>")
    .addImages([
      "https://i.ibb.co/JxfcPk5/Graceful-european-woman-in-winter-fur-coat-and-stylish-dress-sitting-in-studio-over-white-background.jpg",
      "https://i.ibb.co/KLjD3X1/Graceful-european-woman-in-winter-fur-coat-and-stylish-dress-sitting-in-studio-over-white-background.jpg",
      "https://i.ibb.co/94y6hVV/Graceful-european-woman-in-winter-fur-coat-and-stylish-dress-sitting-in-studio-over-white-background.jpg",
    ])
    .setCategory(Category.clothes)
    .setBrand("Mango")
    .setInStock(false)
    .addAttributeSet(clothesSizes),

  new Product("Coat")
    .setId("coat-canada-goose")
    .setPrice(355)
    .addImages([
      "https://i.ibb.co/8MrtHfC/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/KjkCyrZ/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/TYDJQw8/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
    ])
    .addAttributeSet(clothesSizes)
    .setBrand("Canada Goose")
    .setDescription("<p>Awesome winter coat</p>")
    .setCategory(Category.clothes),

  new Product("Hoodie")
    .setId("superdry-hoodie")
    .setPrice(50)
    .addImages([
      "https://i.ibb.co/5T6VXq9/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/DRsgf5M/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/5RRbbmz/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
    ])
    .addAttributeSet(clothesSizes)
    .setBrand("Superdry")
    .setDescription("<p>Awesome casual hoodie</p>")
    .setCategory(Category.clothes),

  new Product("Shirt")
    .setId("superdry-shirt")
    .setPrice(70)
    .addImages([
      "https://i.ibb.co/CHJszbQ/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/G2HN7vd/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
    ])
    .addAttributeSet(clothesSizes)
    .setBrand("Superdry")
    .setDescription("<p>Awesome checked shirt</p>")
    .setCategory(Category.clothes),

  new Product("PlayStation 5")
    .setId("ps-5")
    .setPrice(700)
    .addImages([
      "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg",
    ])
    .addAttributeSet(colors)
    .addAttributeSet(capacity)
    .setBrand("Sony")
    .setInStock(false)
    .setDescription(
      "<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>"
    )
    .setCategory(Category.tech),

  new Product("Xbox Series S 512GB")
    .setId("xbox-series-s")
    .setPrice(277)
    .addImages([
      "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg",
    ])
    .setBrand("Microsoft")
    .setInStock(false)
    .addAttributeSet(colors)
    .addAttributeSet(capacity)
    .setDescription(xboxDescription)
    .setCategory(Category.tech),

  new Product("iMac 2021")
    .setId("apple-imac-2021")
    .setPrice(1400)
    .setBrand("Apple")
    .addImages([
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000",
    ])
    .addAttributeSet(
      new AttributeSet("Capacity")
        .addItem(new Attribute("256GB"))
        .addItem(new Attribute("512GB"))
    )
    .setDescription("The new iMac!")
    .addAttributeSet(new AttributeSet("With USB 3 ports").addItemList(yesNo))
    .addAttributeSet(
      new AttributeSet("Touch ID in keyboard").addItemList(yesNo)
    )
    .setCategory(Category.tech),

  new Product("iPhone 12 Pro")
    .setId("apple-iphone-12-pro")
    .setPrice(830)
    .setBrand("Apple")
    .setDescription("This is iPhone 12. Nothing else to say.")
    .addImages([
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000",
    ])
    .addAttributeSet(capacity)
    .addAttributeSet(colors)
    .setCategory(Category.tech),

  new Product("AirPods Pro")
    .setId("apple-airpods-pro")
    .setPrice(249)
    .setBrand("Apple")
    .addImages([
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000",
    ])
    .setInStock(false)
    .setDescription(airpodsDescription)
    .setCategory(Category.tech),

  new Product("AirTag")
    .setId("apple-airtag")
    .setPrice(100)
    .setBrand("Apple")
    .addImages([
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000",
    ])
    .setDescription(airtagDescription)
    .setCategory(Category.tech),
];

export { products };
