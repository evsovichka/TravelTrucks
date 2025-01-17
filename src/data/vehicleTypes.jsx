import VanIcon from "../components/ui/icons/VanIcon.jsx";
import FullyIntegratedIcon from "../components/ui/icons/FullyIntegratedIcon.jsx";
import AlcoveIcon from "../components/ui/icons/AlcoveIcon.jsx";

export const VehicleTypes = [
  {
    id: 1,
    label: "Van",
    value: "van",
    icon: <VanIcon size={32} />,
  },
  {
    id: 2,
    label: "Fully Integrated",
    value: "fullyIntegrated",
    icon: <FullyIntegratedIcon size={32} />,
  },
  {
    id: 3,
    label: "Alcove",
    value: "alcove",
    icon: <AlcoveIcon size={32} />,
  },
];
