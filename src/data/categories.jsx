import ACIcon from "../components/ui/icons/ACIcon.jsx";
import KitchenIcon from "../components/ui/icons/KitchenIcon.jsx";
import TVIcon from "../components/ui/icons/TVIcon.jsx";
import BathroomIcon from "../components/ui/icons/BathroomIcon.jsx";
import RefrigeratorIcon from "../components/ui/icons/RefrigeratorIcon.jsx";
import MicrowaveIcon from "../components/ui/icons/MicrowaveIcon.jsx";
import PetrolIcon from "../components/ui/icons/PetrolIcon.jsx";
import WaterIcon from "../components/ui/icons/WaterIcon.jsx";
import { FaRadio } from "react-icons/fa6";
import { GiGasStove } from "react-icons/gi";

const categories = [
  {
    name: "AC",
    icon: <ACIcon size={20} />,
  },

  {
    name: "kitchen",
    icon: <KitchenIcon size={20} />,
  },
  {
    name: "TV",
    icon: <TVIcon size={20} />,
  },
  {
    name: "bathroom",
    icon: <BathroomIcon size={20} />,
  },
  {
    name: "petrol",
    icon: <PetrolIcon size={20} />,
  },
  {
    name: "water",
    icon: <WaterIcon size={20} />,
  },
  {
    name: "microwave",
    icon: <MicrowaveIcon size={20} />,
  },
  {
    name: "refrigerator",
    icon: <RefrigeratorIcon size={20} />,
  },
  {
    name: "radio",
    icon: <FaRadio size={20} />,
  },
  {
    name: "gas",
    icon: <GiGasStove size={20} />,
  },
];

export default categories;
