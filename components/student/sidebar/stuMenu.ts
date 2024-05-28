import { AiOutlineLogout } from "react-icons/ai";
import { BsMoonStarsFill } from "react-icons/bs";
import { GiAchievement } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { IoSettings } from "react-icons/io5";

export const MenuList = [
  {
    path: "/stu-course",
    icon: ImBooks,
    active: false,
  },

  {
    path: "/achievement",
    icon: GiAchievement,
    active: false,
  },
  {
    path: "/stu-setting",
    icon: IoSettings,
    active: false,
  },
  {
    path: "",
    icon: BsMoonStarsFill,
    active: false,
  },
];

export const Logout = [
  {
    path: "",
    icon: AiOutlineLogout,
    active: false,
  },
];
