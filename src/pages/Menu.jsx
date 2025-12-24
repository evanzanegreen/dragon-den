import { useState } from "react";
import menuData from "../data/menuData.js";
import menuCategories from "../config/menuCategories.js";
import "./Menu.css";
import Hero from "../components/Hero.jsx";
import Button from "../components/Button.jsx";

function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[1].id);
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
          overlayOpacity={0.85}
          smTitle="GATHER AT OUR"
          title="TABLE."
        />
      </div>

      <div>
        <h1>Our Menu</h1>
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
                className={`menu-tab ${isActive ? "active" : ""}`}
              >
                {category.label}
              </Button>
            );
          })}
        </div>

        {/*Menu Cards Here*/}
        <ul>
          {sortedItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Menu;
