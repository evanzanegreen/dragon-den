//================================================================
//Menu.jsx
//Responsibility: Page level orchestration for the Menu view.
//-Owns category selection
//-Owns cart quantity state (itemQuantities)
//-Derives filtered (that is a type of sorting) menu items
//Renders Hero, Tabs, Category Hero, Item Cards and Cart Surface
//================================================================

import { useState, useEffect, useCallback } from "react";
import menuData from "../data/menuData.js"; //Static catalog that contains: title, price, id, category, etc.
import menuCategories from "../config/menuCategories.js"; //Static config: category list + ordering (organization, not purchase)
import "./Menu.css";

import Cart from "../components/Cart.jsx";
import Hero from "../components/Hero.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import { MdOutlineShoppingCart } from "react-icons/md";

//Assets for category hero content (illustrations + background images)
import appetizersHero from "../assets/illustrations/categories/category-appetizers.png";
import entreesHero from "../assets/illustrations/categories/category-entrees.png";
import sidesHero from "../assets/illustrations/categories/category-sides.png";
import dessertsHero from "../assets/illustrations/categories/category-desserts.png";
import drinksHero from "../assets/illustrations/categories/category-drinks.png";
import teaCoffeeHero from "../assets/illustrations/categories/category-tea-coffee.png";
import specialsHero from "../assets/illustrations/categories/category-specials.png";
import kidsHero from "../assets/illustrations/categories/category-kids.png";

import appetizersBg from "../assets/illustrations/menu-hero/appetizers.jpg";
import entreesBg from "../assets/illustrations/menu-hero/entrees.jpg";
import sidesBg from "../assets/illustrations/menu-hero/sides.jpg";
import dessertsBg from "../assets/illustrations/menu-hero/desserts.jpg";
import drinksBg from "../assets/illustrations/menu-hero/drinks.jpg";
import teaCoffeeBg from "../assets/illustrations/menu-hero/tea-coffee.jpg";
import specialsBg from "../assets/illustrations/menu-hero/specials.jpg";
import kidsBg from "../assets/illustrations/menu-hero/appetizers.jpg";

/*CATEGORY HERO MAP (Static lookup table)
Responsibility: For a given category ID, provide the hero content (headline, subcopy, images).
This is NOT a React state. It never changes at runtime.
*/
const categoryHeroMap = {
  appetizers: {
    headline: "Start Strong.",
    subcopy:
      "Small plates and starters meant to be shared and enjoyed together.",
    imageSrc: appetizersHero,
    imageAlt: "Appetizers hero illustration",
    backgroundSrc: appetizersBg,
  },
  entrees: {
    headline: "Main Event.",
    subcopy:
      "Bold, hearty dishes rooted in Caribbean tradition and big flavor.",
    imageSrc: entreesHero,
    imageAlt: "Entrees hero illustration",
    backgroundSrc: entreesBg,
  },
  sides: {
    headline: "Perfect Pair.",
    subcopy: "Classic accompaniments that round out every plate at the table.",
    imageSrc: sidesHero,
    imageAlt: "Sides hero illustration",
    backgroundSrc: sidesBg,
  },
  desserts: {
    headline: "Sweet Finish.",
    subcopy: "Sweet finishes inspired by island flavors and family favorites.",
    imageSrc: dessertsHero,
    imageAlt: "Desserts hero illustration",
    backgroundSrc: dessertsBg,
  },
  drinks: {
    headline: "Sip & Relax.",
    subcopy:
      "Refreshing sips, from tropical classics to non-alcoholic favorites.",
    imageSrc: drinksHero,
    imageAlt: "Drinks hero illustration",
    backgroundSrc: drinksBg,
  },
  "tea-coffee": {
    headline: "Comfy Sips.",
    subcopy: "Hot and comforting favorites to sip alongside any meal.",
    imageSrc: teaCoffeeHero,
    imageAlt: "Tea and coffee hero illustration",
    backgroundSrc: teaCoffeeBg,
  },
  specials: {
    headline: "Just In.",
    subcopy: "Limited-time dishes and seasonal highlights worth discovering.",
    imageSrc: specialsHero,
    imageAlt: "Specials hero illustration",
    backgroundSrc: specialsBg,
  },
  kids: {
    headline: "Little Legends.",
    subcopy: "Simple, familiar favorites made just for smaller appetites.",
    imageSrc: kidsHero,
    imageAlt: "Kids menu hero illustration",
    backgroundSrc: kidsBg,
  },
  default: {
    headline: "Gather Round.",
    subcopy: "Choose a category to explore what’s cooking.",
    imageSrc: entreesHero,
    imageAlt: "Menu hero illustration",
    backgroundSrc: entreesBg,
  },
};

function Menu() {
  //==============================
  //STATE (Source of Truth)
  //==============================

  //Which tab is currently selected?
  //State because it changes whenever user clicks tabs.
  const [activeCategory, setActiveCategory] = useState(menuCategories[1].id);

  //CART STATE (current implementation)
  //itemQuantities is an object: {[idenId]: quantity}
  //This is the current "cart source of truth."
  const [itemQuantities, setItemQuantities] = useState({});

  //NOTE: Created a different cart state earlier but it was never used/updated.
  //Keeping an unused cart state creates confusion
  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = () => setIsCartOpen(true);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  //==============================
  //EFFECT
  //==============================
  useEffect(() => {
    const cartCount = Object.values(itemQuantities).reduce(
      (sum, qty) => sum + qty,
      0
    );

    if (isCartOpen) {
      document.title = `Dragon Den • Cart Open (${cartCount})`;
    } else {
      document.title = "Dragon Den";
    }
  }, [isCartOpen, itemQuantities]);

  useEffect(() => {
    if (!isCartOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        closeCart();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCartOpen, closeCart]);

  //==============================
  //DERIVED VALUES (Computed from state + static data)
  //These are not state because they can be recalculated from the above
  //==============================

  //Pick hero content for the active category (or fall back to the default).
  const heroContent =
    categoryHeroMap[activeCategory] ?? categoryHeroMap.default;

  //Filter menu Data down to items in the items in the selected category.
  const filteredItems = menuData.filter(
    (item) => item.category === activeCategory
  );

  //Sort the filtered items based on display rules.
  //Derived value: changes automatically when activeCategory changes.
  const sortedItems = [...filteredItems].sort((a, b) => {
    //1) Chef's Signature First
    if (a.isChefSignature !== b.isChefSignature) {
      return a.isChefSignature ? -1 : 1;
    }

    //2) Seasonal Items Second
    if (a.isSeasonal !== b.isSeasonal) {
      return a.isSeasonal ? -1 : 1;
    }

    //1) Tie Breaker: Title A-Z
    return a.title.localeCompare(b.title);
  });

  //Sort categories by configured order (used for rendering tabs).
  const sortedCategories = [...menuCategories].sort(
    (a, b) => a.order - b.order
  );

  //Used for empty state UI.
  const isEmptyCategory = sortedItems.length === 0;

  //==============================
  //HANDLERS (Functions that update state)
  //==============================

  //Sets the quantity of a specific item ID to an explicit nextQty
  //If nextQty <= 0 , remove it from the object (that means not in cart)
  //This keeps item Quantities clean and supports "distinct items" counting.
  const handleQuantityChange = (id, nextQty) => {
    setItemQuantities((prev) => {
      const updated = { ...prev };
      if (nextQty <= 0) delete updated[id];
      else updated[id] = nextQty;
      return updated;
    });
  };

  //Adds 1 to the quantity for a spoecific item ID (increment)
  //This is the Add to Cart behaviour.
  const handleCardClickAdd = (id) => {
    setItemQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
    openCart();
  };

  const handleRemoveFromCart = (id) => {
    setItemQuantities((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const cartCount = Object.values(itemQuantities).reduce(
    (sum, qty) => sum + qty,
    0
  );

  //==============================
  //RENDER
  //==============================
  return (
    <>
      <div>
        <Hero
          mediaType="image"
          mediaSrc="/menu-hero.png"
          mediaAlt="Menu Hero"
          overlayOpacity={0.65}
          smTitle="GATHER AT OUR"
          title="TABLE."
        />
      </div>

      <section className="section-menu">
        <div className="container-menu">
          <div className="menu-cart">
            <h1 className="header-menu">Our Menu</h1>
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<MdOutlineShoppingCart />}
              aria-label="Open Cart"
              onClick={openCart}
            >
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Button>
          </div>

          {/*Menu Tabs Here*/}
          <div className="menu-tabs">
            {sortedCategories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <Button
                  key={category.id}
                  variant="ghost"
                  onClick={() => setActiveCategory(category.id)}
                  className={`menu-tab ${isActive ? "is-active" : ""}`}
                >
                  {category.label}
                </Button>
              );
            })}
          </div>

          {/*Category Heroes Here*/}
          <section className="menu-category-hero">
            <img
              className="menu-category-hero-bg"
              src={heroContent.backgroundSrc}
              alt="Menu Category Hero Image"
              aria-hidden="true"
            />

            <div className="menu-category-hero-overlay"></div>

            <div className="menu-category-hero-text">
              <p className="menu-category-hero-kicker">
                <strong>On the Menu</strong>
              </p>
              <h2 className="menu-category-hero-headline">
                {heroContent.headline}
              </h2>
              <p className="menu-category-hero-subcopy">
                {heroContent.subcopy}
              </p>
            </div>

            <div className="menu-category-hero-media">
              <img
                className="menu-category-hero-illustration"
                src={heroContent.imageSrc}
                alt={heroContent.imageAlt}
                loading="lazy"
              />
            </div>
          </section>

          {/*Menu Cards Here*/}
          {isEmptyCategory ? (
            <div className="menu-empty-state">
              <h3>Coming Soon!</h3>
              <p>
                We’re working on something new here. Check back soon for more
                updates.
              </p>
            </div>
          ) : (
            <div className="menu-items-grid">
              {sortedItems.map((item) => (
                <Card
                  key={item.id}
                  variant="menu"
                  {...item}
                  quantity={itemQuantities[item.id] || 0}
                  onCardClick={() => handleCardClickAdd(item.id)}
                  onQuantityChange={handleQuantityChange}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Cart
        isOpen={isCartOpen}
        onClose={closeCart}
        itemQuantities={itemQuantities}
        menuData={menuData}
        onRemoveItem={handleRemoveFromCart}
        onQuantityChange={handleQuantityChange}
      />
    </>
  );
}

export default Menu;
