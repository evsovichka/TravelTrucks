import ACIcon from "../components/ui/icons/ACIcon.jsx";
import AutomaticIcon from "../components/ui/icons/AutomaticIcon.jsx";
import BathroomIcon from "../components/ui/icons/BathroomIcon.jsx";
import KitchenIcon from "../components/ui/icons/KitchenIcon.jsx";
import TVIcon from "../components/ui/icons/TVIcon.jsx";

export const equipmentList = [
  {
    id: 1,
    label: "AC",
    value: "AC",
    icon: <ACIcon size={32} />,
  },
  {
    id: 2,
    label: "Automatic",
    value: "automatic",
    icon: <AutomaticIcon size={32} />,
  },
  {
    id: 3,
    label: "Kitchen",
    value: "kitchen",
    icon: <KitchenIcon size={32} />,
  },
  {
    id: 4,
    label: "TV",
    value: "TV",
    icon: <TVIcon size={32} />,
  },
  {
    id: 5,
    label: "Bathroom",
    value: "bathroom",
    icon: <BathroomIcon size={32} />,
  },
];
