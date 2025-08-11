    
document.addEventListener("DOMContentLoaded", function () {
  const menuOpenButton = document.querySelector("#menu-open-button");
  const menuCloseButton = document.querySelector("#menu-close-button");
  const navMenu = document.querySelector(".navmenu");

  if (menuOpenButton && menuCloseButton && navMenu) {
    menuOpenButton.addEventListener("click", () => {
      document.body.classList.add("show-mobile-menu");
    });

    menuCloseButton.addEventListener("click", () => {
      document.body.classList.remove("show-mobile-menu");
    });
  }

  const carouselElement = document.querySelector('#testimonialCarousel');
  if (carouselElement) {
    new bootstrap.Carousel(carouselElement, {
      interval: 5000,
      pause: 'hover',
      ride: 'carousel'
     
    });
  }
});


const products = {
  brewed: [
    {
      name: "Hot Brewed Coffee",
      price: "₱70",
      info: "Swing by and warm up while enjoying any of our three roasts brewed daily.",
      image: "photos/brewed1.jpg",
      related: ["photos/brewed2.jpg", "photos/brewed3.jpg","photos/brewed4.jpg"]
    },
    {
      name: "COLD BREWED",
      price: "₱75",
      info: "Smooth and boldHandcrafted in small batches daily, slow-steeped in cool water for 20 hours, without touching  Cold Brew is made from our custom blend of beans grown to steep long and cold for a super-smooth flavor. brewed blend.",
      image: "photos/brewed2.jpg",
      related: ["photos/brewed1.jpg", "photos/brewed3.jpg","photos/brewed4.jpg"]
    },
    {
      name: "VANILLA SWEET CREAM COLD BREW",
      price: "₱100",
      info: "Just before serving, our slow-steeped custom blend Cold Brew is topped with a delicate float of house-made vanilla sweet cream that cascades throughout the cup.",
      image: "photos/brewed3.jpg",
      related: ["photos/brewed1.jpg", "photos/brewed2.jpg","photos/brewed4.jpg"]
    },
    {
      name: "DARK CARAMEL NITRO COLD BREW",
      price: "₱100",
      info: "Nonfat milk Cold Foam elevates our Nitro Cold Brew with a touch of creaminess and flavor. The drink is finished with a strike of Turkish coffee ground.",
      image: "photos/brewed4.jpg",
      related: ["photos/brewed1.jpg", "photos/brewed2.jpg","photos/brewed3.jpg"]
    },
  ],
  espresso: [
    {
      name: "Espresso ",
      price: "₱70",
      info: "Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.",
      image: "photos/espresso1.jpg",
      related: ["photos/espresso2.jpg", "photos/espresso3.jpg", "photos/espresso4.jpg"]
    },
    {
      name: "ESPRESSO MACCHIATO",
      price: "₱80",
      info: "Our rich espresso marked with dollop of steamed milk and foam. A European-style classic.",
      image: "photos/espresso2.jpg",
      related: ["photos/espresso1.jpg", "photos/espresso3.jpg", "photos/espresso4.jpg"]
    },
    {
      name: "Iced Caramel Macchiato",
      price: "₱100",
      info: "We combine our rich, full-bodied espresso with vanilla-flavored syrup, milk and ice, then top it off with caramel drizzle for an oh-so-sweet finish.",
      image: "photos/espresso3.jpg",
      related: ["photos/espresso1.jpg", "photos/espresso2.jpg", "photos/espresso4.jpg"]
    },
    {
      name: "Iced Cappuccino",
      price: "₱100",
      info: "Coffee meets milk and ice in a blender for a rumble and tumble and together they create one of our original Frappuccino® beverages",
      image: "photos/espresso4.jpg",
      related: ["photos/espresso1.jpg", "photos/espresso2.jpg", "photos/espresso3.jpg"]
    },
  ],
  latte: [
    {
      name: "Chocolate Cream Frappuccino",
      price: "₱100",
      info: "A rich and creamy blend of chocolate flavoured sauce, milk and ice. Topped with whipped cream.",
      image: "photos/latte1.jpg",
      related: ["photos/latte2.jpg", "photos/latte3.jpg", "photos/latte4.jpg"]
    },
    {
      name: "White Chocolate Cream Frappuccino",
      price: "₱100",
      info: "A smooth blend of white chocolate sauce, milk and ice and topped with whipped cream for a flavor that wows.",
      image: "photos/latte2.jpg",
      related: ["photos/latte1.jpg", "photos/latte3.jpg", "photos/latte4.jpg"]
    },
    {
      name: "Chocolate Chip Cream Frappuccino",
      price: "₱100",
      info: "Rich mocha-flavored sauce meets up with chocolaty chips, milk and ice for a blender bash. Top it off with sweetened whipped cream and mocha drizzle for a real party in your mouth.",
      image: "photos/latte3.jpg",
      related: ["photos/latte1.jpg", "photos/latte2.jpg", "photos/latte4.jpg"]
    },
    {
      name: "Dark Caramel Coffee Frappuccino",
      price: "₱100",
      info: "Dark caramel coffee Frappuccino is topped with buttery dark caramel sauce and layered between signature whipped cream infused with cold brew, dark caramel sauce, and white chocolate mocha, and a dollop of dark caramel sauce at the bottom of the cup.",
      image: "photos/latte4.jpg",
      related: ["photos/latte1.jpg", "photos/latte2.jpg", "photos/latte3.jpg"]
    }
  ],
  desert: [
    {
      name: "New York Cheesecake",
      price: "₱60",
      info: "Smooth and velvety cheescake is a slice of heaven.",
      image: "photos/desert1.jpg",
      related: ["photos/desert2.jpg", "photos/desert3.jpg", "photos/desert4.jpg"]
    },
     {
      name: "Blueberry Licious Cheesecake",
      price: "₱80",
      info: "A silken smooth, yet light cheesecake swirled with blueberries bursting with flavors. Finished with sweet-tangy blueberry compote. A refreshing dessert!",
      image: "photos/desert2.jpg",
      related: ["photos/desert1.jpg", "photos/desert3.jpg", "photos/desert4.jpg"]
    },
     {
      name: "Classic Chocolate Cake",
      price: "₱75",
      info: "Buttery caramel fudge and silky smooth chocolate sandwiched between layers of dark chocolate cake and finished with chocolate ganache.",
      image: "photos/desert3.jpg",
      related: ["photos/desert1.jpg", "photos/desert2.jpg", "photos/desert4.jpg"]
    },
     {
      name: "Banoffee Pie",
      price: "₱70",
      info: "A favorite dessert pie made from bananas, cream and toffee, on a buttery and crumbly base.",
      image: "photos/desert4.jpg",
      related: ["photos/desert1.jpg", "photos/desert2.jpg", "photos/desert3.jpg"]
    }
  ],
  bakery: [
    {
      name: "Chocolate Dipped Doughnut",
      price: "₱60",
      info: "A classic doughnut glazed with dipped chocolate on top.",
      image: "photos/bakery1.jpeg",
      related: ["photos/bakery2.jpeg", "photos/bakery3.jpeg", "photos/bakery4.jpeg"]
    },
     {
      name: "Belgian Waffle",
      price: "₱40",
      info: "A sweet yeast-raised dough with sugar pearls enjoyed it with whipped cream and your favorite toppings.",
      image: "photos/bakery2.jpeg",
      related: ["photos/bakery1.jpeg", "photos/bakery3.jpeg", "photos/bakery4.jpeg"]
    },
     {
      name: "Banana Bread",
      price: "₱50",
      info: "Moist and delicious with loads of banana flavor.",
      image: "photos/bakery3.jpeg",
      related: ["photos/bakery1.jpeg", "photos/bakery2.jpeg", "photos/bakery4.jpeg"]
    }, {
      name: "Bacon Belgian Waffle",
      price: "₱60",
      info: "Yeast-raised dough with sugar pearls and loaded with bacon bits.",
      image: "photos/bakery4.jpeg",
      related: ["photos/bakery1.jpeg", "photos/bakery2.jpeg", "photos/bakery3.jpeg"]
    }
  ],
  sandwiches: [
    {
      name: "SPAM® Classic, Egg & Cheese on Potato Bread",
      price: "₱60",
      info: "SPAM Classic, fluffy scrambled egg and melted cheddar cheese on soft potato bread.",
      image: "photos/sand1.jpg",
      related: ["photos/sand2.jpg", "photos/sand3.jpg", "photos/sand4.jpg"]
    },
     {
      name: "Roasted Ham, Egg, & Cheese on Croissant Bun",
      price: "₱70",
      info: "Sliced roasted ham, stacked with fluffy egg patty, and emmental cheese on our signature croissant bun.",
      image: "photos/sand2.jpg",
      related: ["photos/sand1.jpg", "photos/sand3.jpg", "photos/sand4.jpg"]
    },
     {
      name: "Spanish Chorizo, Egg and Mozzarella Cheese on Whole Wheat Pandesal",
      price: "₱70",
      info: "Smokey sliced Spanish chorizo, milky egg patty and gooey mozzarella cheese on Soft whole wheat pandesal.",
      image: "photos/sand3.jpg",
      related: ["photos/sand1.jpg", "photos/sand2.jpg", "photos/sand4.jpg"]
    }, 
    {
      name: "Turkey Ham, Egg White And Fontina Cheese On Whole Wheat English Muffin",
      price: "₱70",
      info: "Slow-roasted turkey ham, fluffy herbed white omelette and nutty Fontina cheese on soft and chewy whole wheat englilsh muffin.",
      image: "photos/latte4.jpg",
      related: ["photos/sand1.jpg", "photos/sand2.jpg", "photos/sand3.jpg"]
    }
  ]
  
};

function loadCategory(category) {
  const list = document.getElementById("product-list");
  const detail = document.getElementById("product-detail");
  list.innerHTML = "";
  detail.classList.add("hidden");

  products[category].forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
    `;
    card.onclick = () => showProductDetail(product);
    list.appendChild(card);
  });
}

function showProductDetail(product) {
  const detail = document.getElementById("product-detail");
  detail.classList.remove("hidden");
  detail.innerHTML = `
    <button class="close-btn" onclick="closeProductDetail()">×</button>
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <h3>${product.price}</h3>
    <p>${product.info}</p>
    <h4>You may also like:</h4>
    <div class="related">
      ${product.related.map(img => `<img src="${img}" alt="Related">`).join("")}
    </div>
  `;
}
function closeProductDetail() {
  document.getElementById("product-detail").classList.add("hidden");
}


