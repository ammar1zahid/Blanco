/*
  Menu data structured for use in a React/JS app
  Each item now includes title, description, and image attributes.
*/

const menuCategories = [
  {
    category: "SIDELINES",
    items: [
      {
        name: "French Fries",
        price: 300,
        title: "Crispy Golden Fries",
        description: "Thin-cut potatoes fried to a perfect crunch and lightly seasoned.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop"
      },
      {
        name: "Curly Fries",
        price: 380,
        title: "Seasoned Curly Fries",
        description: "Spiraled potato fries tossed in our signature blend of spices.",
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop"
      },
      {
        name: "Cajun Fries",
        price: 380,
        title: "Spicy Cajun Fries",
        description: "Hot and smoky fries dusted with authentic Cajun seasoning.",
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&h=300&fit=crop"
      },
      {
        name: "Waffle Fries",
        price: 350,
        title: "Waffle-Cut Fries",
        description: "Thick-cut, lattice-style fries, crispy on the outside, tender inside.",
        image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    category: "BURGERS WITH FRIES",
    items: [
      {
        name: "Buttermilk Chicken Burger",
        price: 849,
        title: "Juicy Buttermilk Chicken Burger",
        description: "Crispy buttermilk-marinated chicken with fresh lettuce and mayo.",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop"
      },
      {
        name: "Beef Smash Burger Single Patty",
        price: 849,
        title: "Classic Smash Burger (Single)",
        description: "A perfectly smashed beef patty with melted cheese and pickles.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
      },
      {
        name: "Beef Smash Burger Double Patty",
        price: 1049,
        title: "Double Smash Burger",
        description: "Two juicy beef patties, American cheese, and our special sauce.",
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    category: "ADD ON",
    items: [
      {
        name: "French Fries & Drink",
        price: 280,
        title: "Fries & Soft Drink Combo",
        description: "Classic fries served with your choice of refreshing drink.",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop"
      },
      {
        name: "Curly Fries & Drink",
        price: 380,
        title: "Curly Fries Combo",
        description: "Spiral fries paired with a cold beverage of your choice.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
      },
      {
        name: "Waffle Fries & Drink",
        price: 380,
        title: "Waffle Fries Combo",
        description: "Golden waffle fries served with a chilled drink.",
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    category: "EXTRAS",
    items: [
      {
        name: "Cheese Slice",
        price: 99,
        title: "Add-On Cheese Slice",
        description: "Melted cheddar slice for extra cheesiness.",
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=300&fit=crop"
      },
      {
        name: "Chicken Patty",
        price: 350,
        title: "Grilled Chicken Patty",
        description: "Tender grilled chicken fillet to boost your meal.",
        image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=400&h=300&fit=crop"
      },
      {
        name: "Beef Patty",
        price: 350,
        title: "Beef Patty",
        description: "Succulent beef patty, cooked to juicy perfection.",
        image: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?w=400&h=300&fit=crop"
      },
      {
        name: "Coffee Shot",
        price: 150,
        title: "Extra Espresso Shot",
        description: "An additional shot of rich espresso.",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop"
      },
      {
        name: "Extra Flavour",
        price: 100,
        title: "Extra Flavor Syrup",
        description: "Add a shot of flavored syrup to any drink.",
        image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    category: "DIPS",
    items: [
      {
        name: "Thai Sweet Chili Sauce",
        price: 75,
        title: "Sweet Chili Dip",
        description: "Tangy and sweet with a mild chili kick.",
        image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&h=300&fit=crop"
      },
      {
        name: "Thousand Island Sauce",
        price: 75,
        title: "Thousand Island Dip",
        description: "Creamy mayo-based sauce with a hint of sweetness.",
        image: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?w=400&h=300&fit=crop"
      },
      {
        name: "Spicy Mayo Sauce",
        price: 75,
        title: "Spicy Mayo",
        description: "Rich mayo blended with chili for extra heat.",
        image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop"
      },
      {
        name: "Honey Mustard Sauce",
        price: 75,
        title: "Honey Mustard Dip",
        description: "Sweet honey meets tangy mustard in a zesty dip.",
        image: "https://images.unsplash.com/photo-1594998893017-36147bd9fe8c?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    category: "DESSERTS",
    items: [
      {
        name: "Fudge Brownie",
        price: 400,
        title: "Decadent Fudge Brownie",
        description: "Rich chocolate brownie with a gooey fudge center.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop"
      },
      {
        name: "San Sebastian Cheesecake",
        price: 750,
        title: "Burnt Basque Cheesecake",
        description: "Creamy cheesecake with a signature caramelized top.",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop"
      },
      {
        name: "Lisbon Cake",
        price: 400,
        title: "Portuguese Lisbon Cake",
        description: "Moist sponge cake inspired by Lisbon's flavors.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
      },
      {
        name: "Banana Bread",
        price: 200,
        title: "Classic Banana Bread",
        description: "Moist bread loaf with ripe banana and a hint of cinnamon.",
        image: "https://images.unsplash.com/photo-1595535068225-b7a4c9e9e61f?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    category: "SNACKS",
    items: [
      {
        name: "Onion & Cheese Pastry",
        price: 360,
        title: "Savory Onion Cheese Pastry",
        description: "Flaky pastry filled with caramelized onions and cheese.",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    category: "JAPANESE MATCHA",
    items: [
      {
        name: "Coconut Matcha (Signature)",
        price: 999,
        title: "Signature Coconut Matcha",
        description: "Creamy matcha latte with a coconut twist.",
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=300&fit=crop"
      },
      {
        name: "Strawberry Matcha (Signature)",
        price: 999,
        title: "Signature Strawberry Matcha",
        description: "Fresh strawberry puree blended into matcha latte.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop"
      },
      {
        name: "French Vanilla Matcha",
        price: 999,
        title: "French Vanilla Matcha",
        description: "Smooth matcha with fragrant vanilla notes.",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop"
      },
      {
        name: "Spanish Matcha",
        price: 999,
        title: "Spanish Matcha",
        description: "Bold matcha latte with a hint of sweet cinnamon.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop"
      },
      {
        name: "Wildberry Matcha (Signature)",
        price: 999,
        title: "Signature Wildberry Matcha",
        description: "Tangy wildberry infusion in creamy matcha latte.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    category: "OVER ICE COFFEE",
    items: [
      {
        name: "Pistachio Latte (Signature)",
        price: 1250,
        title: "Signature Pistachio Latte",
        description: "Iced latte infused with pistachio syrup and cream.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop"
      },
      {
        name: "Spanish Latte (Signature)",
        price: 800,
        title: "Signature Spanish Latte",
        description: "Smooth iced latte with a touch of condensed milk.",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=300&fit=crop"
      },
      {
        name: "Coconut Mocha (Signature)",
        price: 999,
        title: "Signature Coconut Mocha",
        description: "Rich mocha blended with a hint of coconut cream.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
      },
      {
        name: "Americano",
        price: 650,
        title: "Classic Iced Americano",
        description: "Strong espresso diluted over ice for a bold finish.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop"
      },
      {
        name: "Hazelnut Latte",
        price: 650,
        title: "Iced Hazelnut Latte",
        description: "Latte sweetened with fragrant hazelnut syrup.",
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&fit=crop"
      },
      {
        name: "Irish Latte",
        price: 650,
        title: "Iced Irish Latte",
        description: "Latte with a hint of Irish cream flavor.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop"
      },
      {
        name: "Caramel Latte",
        price: 650,
        title: "Iced Caramel Latte",
        description: "Latte drizzled with rich caramel sauce.",
        image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&h=300&fit=crop"
      },
      {
        name: "Mocha Latte",
        price: 650,
        title: "Iced Mocha Latte",
        description: "Classic mocha served over ice.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
      },
      {
        name: "Italian Vanilla Latte",
        price: 670,
        title: "Italian Vanilla Iced Latte",
        description: "Creamy vanilla latte with an Italian twist.",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop"
      },
      {
        name: "Cappuccino",
        price: 650,
        title: "Iced Cappuccino",
        description: "Espresso topped with airy milk foam on ice.",
        image: "https://images.unsplash.com/photo-1572286258217-d596880fb5d8?w=400&h=300&fit=crop"
      },
      {
        name: "Latte",   
        price: 600,
        title: "Classic Iced Latte",
        description: "Smooth espresso blended with cold milk and ice.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    category: "ICE TEA",
    items: [
      {
        name: "Passion Fruit",
        price: 750,
        title: "Iced Passion Fruit Tea",
        description: "Refreshing tea infused with tangy passion fruit.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop"
      },
      {
        name: "Wildberry",
        price: 750,
        title: "Iced Wildberry Tea",
        description: "Sweet and tart wildberry flavor in chilled tea.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop"
      },
      {
        name: "Strawberry",
        price: 750,
        title: "Iced Strawberry Tea",
        description: "Fruit-forward strawberry infusion in iced tea.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    category: "MOJITOS",
    items: [
      {
        name: "Sunset",
        price: 800,
        title: "Sunset Mojito",
        description: "Fresh mint, orange juice, and sparkling water for a sunset twist.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop"
      },
      {
        name: "Green Apple & Kiwi",
        price: 750,
        title: "Green Apple & Kiwi Mojito",
        description: "Crisp green apple and kiwi muddled with mint and lime soda.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop"
      },
      {
        name: "Strawberry",
        price: 750,
        title: "Strawberry Mojito",
        description: "Sweet strawberries blended with mint and refreshing sparkling water.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop"
      },
      {
        name: "Passionfruit",
        price: 799,
        title: "Passionfruit Mojito",
        description: "Tropical passionfruit meets classic minty freshness with a fizzy finish.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop"
      },
      {
        name: "Raspberry",
        price: 750,
        title: "Raspberry Mojito",
        description: "Fresh raspberries muddled with mint and lime-infused soda.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop"
      },
      {
        name: "Orange & Wildberry",
        price: 800,
        title: "Orange & Wildberry Mojito",
        description: "Citrus orange and tart wildberry combined with mint and soda water.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop"
      },
      {
        name: "Wildberry Mojito - Signature",
        price: 800,
        title: "Signature Wildberry Mojito",
        description: "Our exclusive blend of wildberries and fresh mint finished with sparkling water.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    category: "HOT COFFEE",
    items: [
      {
        name: "Pistachio Latte (Signature)",
        price: 1250,
        title: "Signature Pistachio Latte",
        description: "Warm latte infused with pistachio syrup and cream.",
        image: "https://images.unsplash.com/photo-1545665277-5937750d4f27?w=400&h=300&fit=crop"
      },
      {
        name: "Spanish Latte (Signature)",
        price: 800,
        title: "Signature Spanish Latte",
        description: "Warm latte sweetened with condensed milk.",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=300&fit=crop"
      },
      {
        name: "Coconut Mocha (Signature)",
        price: 999,
        title: "Signature Coconut Mocha",
        description: "Rich mocha blended with creamy coconut notes.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
      },
      {
        name: "Coconut Dream Latte (Signature)",
        price: 750,
        title: "Dreamy Coconut Latte",
        description: "Silky coconut-infused latte served hot.",
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=300&fit=crop"
      },
      {
        name: "Latte",
        price: 600,
        title: "Classic Latte",
        description: "Steamed milk blended with espresso.",
        image: "https://images.unsplash.com/photo-1545665277-5937750d4f27?w=400&h=300&fit=crop"
      },
      {
        name: "Hazelnut Latte",
        price: 650,
        title: "Hazelnut Latte",
        description: "Nutty hazelnut syrup combined with espresso.",
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&fit=crop"
      },
      {
        name: "Flat White",
        price: 650,
        title: "Flat White",
        description: "Velvety espresso topped with steamed milk.",
        image: "https://images.unsplash.com/photo-1545665277-5937750d4f27?w=400&h=300&fit=crop"
      },
      {
        name: "Caramel Latte",
        price: 650,
        title: "Caramel Latte",
        description: "Sweet caramel syrup in a classic latte.",
        image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&h=300&fit=crop"
      },
      {
        name: "Mocha Latte",
        price: 650,
        title: "Mocha Latte",
        description: "Chocolate-flavored latte with espresso.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
      },
      {
        name: "Italian Vanilla Latte",
        price: 670,
        title: "Italian Vanilla Latte",
        description: "Vanilla-infused latte with an Italian flair.",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop"
      },
      {
        name: "Cappuccino",
        price: 650,
        title: "Cappuccino",
        description: "Espresso topped with thick milk foam.",
        image: "https://images.unsplash.com/photo-1572286258217-d596880fb5d8?w=400&h=300&fit=crop"
      },
      {
        name: "Americano",
        price: 650,
        title: "Classic Americano",
        description: "Hot water poured over espresso shots.",
        image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    category: "BEVERAGES",
    items: [
      {
        name: "Mineral Water",
        price: 70,
        title: "Chilled Mineral Water",
        description: "Pure, refreshing bottled water.",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop"
      },
      {
        name: "Red Bull",
        price: 550,
        title: "Red Bull Energy",
        description: "The classic energy drink to recharge your day.",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop"
      },
      {
        name: "Sparkling Water/Soda",
        price: 120,
        title: "Sparkling Soda Water",
        description: "Carbonated water with a crisp fizz.",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop"
      },
      {
        name: "Coke",
        price: 140,
        title: "Coca-Cola",
        description: "The world's favorite cola beverage.",
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop"
      },
      {
        name: "Diet-Coke",
        price: 140,
        title: "Diet Coca-Cola",
        description: "Zero-sugar version of the classic Coke.",
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop"
      },
      {
        name: "Pepsi",
        price: 140,
        title: "Pepsi",
        description: "Sweet cola with a bold flavor.",
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop"
      },
      {
        name: "Diet-Pepsi",
        price: 140,
        title: "Diet Pepsi",
        description: "Low-calorie cola alternative.",
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop"
      },
      {
        name: "7up",
        price: 140,
        title: "7up",
        description: "Lemon-lime flavored clear soda.",
        image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop"
      },
      {
        name: "Diet-7up",
        price: 140,
        title: "Diet 7up",
        description: "Zero-sugar lemon-lime soda.",
        image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop"
      },
      {
        name: "Mirinda",
        price: 140,
        title: "Mirinda Orange",
        description: "Vibrant orange soda with fruity notes.",
        image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop"
      },
      {
        name: "Fanta",
        price: 140,
        title: "Fanta Orange",
        description: "Bright and bubbly orange soda.",
        image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop"
      },
      {
        name: "Mountain Dew",
        price: 140,
        title: "Mountain Dew",
        description: "Citrusy and caffeinated green soda.",
        image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop"
      }
    ]
  }
];

export default menuCategories;