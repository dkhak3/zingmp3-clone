import icons from "./icons";

const {
  MdOutlineLibraryMusic,
  IconCaNhan,
  IconKhamPha,
  IconZingChart,
  IconTheoDoi,
} = icons;

export const sidebarMenu = [
  {
    path: "mymusic",
    text: "Cá nhân",
    icon: IconCaNhan,
  },
  {
    path: "",
    text: "Khám phá",
    end: true,
    icon: IconKhamPha,
  },
  {
    path: "zing-chart",
    text: "#zingchart",
    icon: IconZingChart,
  },
  {
    path: "follow",
    text: "Theo dõi",
    icon: IconTheoDoi,
  },
];
