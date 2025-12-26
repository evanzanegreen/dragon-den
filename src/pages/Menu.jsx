import { useState } from "react";
import menuData from "../data/menuData.js";
import menuCategories from "../config/menuCategories.js";
import "./Menu.css";
import Hero from "../components/Hero.jsx";
import Button from "../components/Button.jsx";
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

{
  /*Category Hero Map*/
}
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
    headline: "Slow Sips.",
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
  const [activeCategory, setActiveCategory] = useState(menuCategories[1].id);
  const heroContent =
    categoryHeroMap[activeCategory] ?? categoryHeroMap.default;
  const filteredItems = menuData.filter(
    (item) => item.category === activeCategory
  );
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

  const sortedCategories = [...menuCategories].sort(
    (a, b) => a.order - b.order
  );

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
          <h1 className="header-menu">Our Menu</h1>
          {/*Category Hero Here*/}

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
              <p className="menu-category-hero-kicker">On the Menu</p>
              <h2 className="menu-category-hero-headline">
                {heroContent.headline}
              </h2>
              <p className="menu-caategory-hero-subcopy">
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
          <ul>
            {sortedItems.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Menu;
