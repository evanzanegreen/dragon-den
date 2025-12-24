import { MdTapas } from "react-icons/md";
import { PiForkKnifeBold } from "react-icons/pi";
import { CiFries } from "react-icons/ci";
import { LuCakeSlice } from "react-icons/lu";
import { RiDrinks2Line } from "react-icons/ri";
import { TbCoffee } from "react-icons/tb";
import { TbStars } from "react-icons/tb";
import { BsBalloon } from "react-icons/bs";

const MENU_CATEGORIES = [
    {
        id: "appetizers",
        label: "Appetizers",
        description: "Small plates and starters meant to be shared and enjoyed together.",
        order: 1,
        icon: MdTapas,
        heroimage: "/menu-hero/appetizers.jpg",
    },
    {
        id: "entrees",
        label: "Entrees",
        description: "Bold, hearty dishes rooted in Caribbean tradition and big flavor.",
        order: 2,
        icon: PiForkKnifeBold,
        heroimage: "/menu-hero/entrees.jpg",
    },
    {
        id: "sides",
        label: "Sides",
        description: "Classic accompaniments that round out every plate at the table.",
        order: 3,
        icon: CiFries,
        heroimage: "/menu-hero/sides.jpg",
    },
    {
        id: "desserts",
        label: "Desserts",
        description: "Sweet finishes inspired by island flavors and family favorites.",
        order: 4,
        icon: LuCakeSlice,
        heroimage: "/menu-hero/desserts.jpg",
    },
    {
        id: "drinks",
        label: "Drinks",
        description: "Refreshing sips, from tropical classics to non-alcoholic favorites.",
        order: 5,
        icon: RiDrinks2Line,
        heroimage: "/menu-hero/drinks.jpg",
    },
    {
        id: "tea-coffee",
        label: "Tea & Coffee",
        descrption: "Hot and comforting favorites to sip alongside any meal.",
        order: 6,
        icon: TbCoffee,
        heroimage: "/menu-hero/tea-coffee.jpg",
    },
    {
        id: "specials",
        label: "Specials",
        descrption: "Limited-time dishes and seasonal highlights worth discovering.",
        order: 7,
        icon: TbStars,
        heroimage: "/menu-hero/specials.jpg",
    },
    {
        id: "kids",
        label: "Kids Menu",
        descrption: "Simple, familiar favorites made just for smaller appetites.",
        order: 8,
        icon: BsBalloon,
        heroimage: "/menu-hero/kids.jpg",
    },
];

export default MENU_CATEGORIES;