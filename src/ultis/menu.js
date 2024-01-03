import icons from "./icons";

const { MdOutlineLibraryMusic, KHAMPHA, ZINGCHART } = icons;

export const sidebarMenu = [
  {
    path: "mymusic",
    text: "Cá nhân",
    icon: <MdOutlineLibraryMusic size={24} />,
  },
  {
    path: "",
    text: "Khám phá",
    end: true,
    icon: KHAMPHA,
  },
  {
    path: "zing-chart",
    text: "#zingchart",
    icon: ZINGCHART,
  },
  {
    path: "follow",
    text: "Theo dõi",
    icon: <MdOutlineLibraryMusic size={24} />,
  },
];
