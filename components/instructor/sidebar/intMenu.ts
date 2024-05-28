import { AiFillSchedule, AiOutlineLogout } from "react-icons/ai";
import { BiSolidComponent } from "react-icons/bi";
import { BsMoonStarsFill } from "react-icons/bs";
import { HiDocumentReport } from "react-icons/hi";
import { ImBooks } from "react-icons/im";
import { IoSettings } from "react-icons/io5";
import { MdAssessment } from "react-icons/md";

export const MenuList = [
  {
    path: "/int-course",
    icon: ImBooks,
    active: false,
  },
  {
    path: "/schedule",
    icon: AiFillSchedule,
    active: false,
  }, 
  {
    path: "/int-material",
    icon: BiSolidComponent,
    active: false,
  },
  {
    path: "/assessment",
    icon: MdAssessment,
    active: false,
  },
  

  {
    path: "/int-report",
    icon: HiDocumentReport,
    active: false,
  },
  {
    path: "/int-setting",
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
