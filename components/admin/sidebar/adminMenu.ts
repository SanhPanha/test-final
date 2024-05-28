import { AiOutlineLogout } from "react-icons/ai";
import { BiSolidComponent } from "react-icons/bi";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaBuilding, FaCashRegister, FaUser } from "react-icons/fa6";
import { HiDocumentReport } from "react-icons/hi";
import { HiCurrencyDollar, HiMiniAcademicCap } from "react-icons/hi2";

export const MenuList = [
  {
    path: "/faculty",
    icon: FaBuilding,
    active: false,
  },
  {
    path: "/academic",
    icon: HiMiniAcademicCap,
    active: false,
  },
  {
    path: "/admin-material",
    icon: BiSolidComponent,
    active: false,
  },
  {
    path: "/admission",
    icon: FaCashRegister,
    active: false,
  },
  {
    path: "/user",
    icon: FaUser,
    active: false,
  },
  {
    path: "/payment",
    icon: HiCurrencyDollar,
    active: false,
  },
  {
    path: "/admin-report",
    icon: HiDocumentReport,
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
