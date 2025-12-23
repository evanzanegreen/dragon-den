import { useState } from "react";
import menuData from "../data/menuData.js";
import menuCategories from "../config/menuCategories.js";
import "./Menu.css";
import Hero from "../components/Hero.jsx";

function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[1].id);
  const filteredItems = menuData.filter(
    (item) => item.category === activeCategory
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
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Menu;
