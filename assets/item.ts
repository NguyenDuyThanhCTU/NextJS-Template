import { SiZalo } from "react-icons/si";
import {
  BsFacebook,
  BsMessenger,
  BsYoutube,
  BsBatteryCharging,
  BsFillSendExclamationFill,
  BsFillSendCheckFill,
  BsFillSendXFill,
} from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import {
  AiFillInstagram,
  AiOutlineProfile,
  AiOutlineSlack,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import {
  FaFirstOrderAlt,
  FaHome,
  FaRegNewspaper,
  FaTiktok,
} from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiNetworkChart, BiSlideshow } from "react-icons/bi";
import {
  TbCarouselHorizontal,
  TbCubeSend,
  TbListDetails,
  TbSlideshow,
} from "react-icons/tb";
import {
  MdAirlineSeatReclineNormal,
  MdManageAccounts,
  MdMiscellaneousServices,
  MdOutlineLocalCarWash,
  MdOutlinePostAdd,
} from "react-icons/md";
import { CgListTree, CgSize } from "react-icons/cg";
import { IoIosConstruct, IoMdColorWand } from "react-icons/io";
import { GiExitDoor } from "react-icons/gi";

import { CiViewList } from "react-icons/ci";
import { IconType } from "react-icons/lib";
import { IoFlashOutline } from "react-icons/io5";

interface IconMappingType {
  [key: string]: IconType;
}

export const IconMapping: IconMappingType = {
  IoFlashOutline: IoFlashOutline,
  MdManageAccounts: MdManageAccounts,
  SiZalo: SiZalo,
  BsFacebook: BsFacebook,
  HiOutlineUserGroup: HiOutlineUserGroup,
  BsMessenger: BsMessenger,
  AiFillInstagram: AiFillInstagram,
  FaTiktok: FaTiktok,
  AiOutlineTwitter: AiOutlineTwitter,
  BsYoutube: BsYoutube,
  BiSlideshow: BiSlideshow,
  TbListDetails: TbListDetails,
  TbSlideshow: TbSlideshow,
  BiNetworkChart: BiNetworkChart,
  MdOutlinePostAdd: MdOutlinePostAdd,
  AiOutlineUnorderedList: AiOutlineUnorderedList,
  CgListTree: CgListTree,
  FaFirstOrderAlt: FaFirstOrderAlt,
  AiOutlineSlack: AiOutlineSlack,
  BsBatteryCharging: BsBatteryCharging,
  IoMdColorWand: IoMdColorWand,
  MdAirlineSeatReclineNormal: MdAirlineSeatReclineNormal,
  CgSize: CgSize,
  MdOutlineLocalCarWash: MdOutlineLocalCarWash,
  TbCarouselHorizontal: TbCarouselHorizontal,
  GiExitDoor: GiExitDoor,
  AiOutlineProfile: AiOutlineProfile,
  BsFillSendExclamationFill: BsFillSendExclamationFill,
  BsFillSendCheckFill: BsFillSendCheckFill,
  TbCubeSend: TbCubeSend,
  BsFillSendXFill: BsFillSendXFill,
  CiViewList: CiViewList,
  MdMiscellaneousServices: MdMiscellaneousServices,
  FaHome: FaHome,
  IoIosConstruct: IoIosConstruct,
  FaRegNewspaper: FaRegNewspaper,
};

export const SocialMediaDashboard = [
  {
    title: "Trang zalo",
    icon: "SiZalo",
    image:
      "https://atpsoftware.vn/wp-content/uploads//2020/03/20211208103735_id_zalo-1.jpg",
    style: "hover:text-blue-400 hover:bg-white",
  },
  {
    title: "Facebook cá nhân",
    icon: "BsFacebook",
    image:
      "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2slMjBsb2dvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    style: "hover:bg-white hover:text-blue-600",
  },
  {
    title: "Trang Fanpage",
    icon: "HiOutlineUserGroup",
    image:
      "https://img.freepik.com/premium-photo/3d-pile-facebook-logo-background-facebook-famous-social-media-platform_73903-705.jpg?w=2000",
    style: "hover:bg-white hover:text-black p-1",
  },
  {
    title: "Trang Messenger",
    icon: "BsMessenger",
    image:
      "https://img.freepik.com/premium-photo/3d-facebook-messenger-logo-application-blue-background-social-media-communication_73903-695.jpg",
    style: "hover:bg-white hover:text-blue-600 p-1",
  },
  {
    title: "Trang Instagram",
    icon: "AiFillInstagram",
    image: "https://images2.alphacoders.com/123/1230947.png",
    style: "hover:bg-pink-500 hover:text-white",
  },

  {
    title: "Trang Tiktok",
    icon: "FaTiktok",
    image: "https://images.alphacoders.com/112/1123670.png",
    style: "hover:bg-black hover:text-white p-1",
  },

  {
    title: "Trang Twitter",
    icon: "AiOutlineTwitter",
    image:
      "https://vietnix.vn/wp-content/uploads/2022/07/mang-xa-hoi-twitter.webp",
    style: "hover:bg-white hover:text-blue-600 p-1",
  },
  {
    title: "Trang YouTube",
    icon: "BsYoutube",
    image:
      "https://img.nhandan.com.vn/Files/Images/2021/04/13/3A708284_F5B8_407D_ADC0_339DBEE-1618275907021.jpeg",
    style: "hover:bg-red-600 hover:text-white p-1",
  },
];

export const AdminPageHeaderItems = [
  {
    label: "Cấu Hình",
    value: "/admin/cau-hinh",
    children: [
      {
        label: "Thông Tin Website",
        value: "thong-tin-website",
      },
      {
        label: "Thương Hiệu Website",
        value: "thuong-hieu-website",
      },
      {
        label: "Liên Hệ",
        value: "lien-he",
      },
      {
        label: "Cấu Hình SEO",
        value: "cau-hinh-seo",
      },
    ],
  },
  {
    label: "Sản Phẩm",
    value: "/admin/san-pham",
    children: [
      {
        label: "Danh Sách Sản Phẩm",
        value: "danh-sach-san-pham",
      },
      {
        label: "Danh Mục Sản Phẩm",
        value: "danh-muc-san-pham",
      },
      {
        label: "Nhóm Sản Phẩm",
        value: "nhom-san-pham",
      },
      {
        label: "Slide giới thiệu",
        value: "slide-gioi-thieu",
      },
      {
        label: "Cấu Hình SEO",
        value: "cau-hinh-seo",
      },
    ],
  },
  {
    label: "Bài Viết",
    value: "/admin/bai-viet",
    children: [
      {
        label: "Danh Sách Bài Viết",
        value: "danh-sach-bai-viet",
      },
      {
        label: "Danh Mục Bài Viết",
        value: "danh-muc-bai-viet",
      },
      {
        label: "Điều Khoản Sử Dụng",
        value: "dieu-khoan-su-dung",
      },
      {
        label: "Bài giới thiệu",
        value: "bai-gioi-thieu",
      },
      {
        label: "Cấu Hình SEO",
        value: "cau-hinh-seo",
      },
    ],
  },
  {
    label: "Truyền Thông",
    value: "/admin/truyen-thong",
    children: [
      {
        label: "Kênh Truyền Thông",
        value: "kenh-truyen-thong",
      },
      {
        label: "Hình Ảnh",
        value: "hinh-anh",
      },
      {
        label: "Video",
        value: "video",
      },
    ],
  },
  {
    label: "Tài Khoản",
    value: "/admin/tai-khoan",
    children: [
      {
        label: "Thông Tin Tài Khoản",
        value: "thong-tin-tai-khoan",
      },
      {
        label: "Danh Sách Tài Khoản",
        value: "danh-sach-tai-khoan",
      },
      {
        label: "Phân Quyền",
        value: "phan-quyen",
      },
      {
        label: "Lịch Sử Hoạt Động",
        value: "lich-su-hoat-dong",
      },
    ],
  },
  {
    label: "Báo Cáo",
    value: "/admin/bao-cao",
    children: [
      {
        label: "Lượt Truy Cập",
        value: "luot-truy-cap",
      },
      {
        label: "Phản Hồi của Khách Hàng",
        value: "Phan-hoi-cua-khach-hang",
      },
      {
        label: "Đơn Hàng",
        value: "don-hang",
      },

      {
        label: "Sản Phẩm Xem Nhiều",
        value: "san-pham-xem-nhieu",
      },
    ],
  },
  {
    label: "Tiện Ích",
    value: "/admin/tien-ich",
    children: [
      {
        label: "Đối tác",
        value: "doi-tac",
      },
      {
        label: "Chi Nhánh",
        value: "chi-nhanh",
      },
    ],
  },
  {
    label: "Thoát",
    value: "/",
  },
];

/*<---------------------------------------------------------- Custom System ----------------------------------------------------------> */

export const SocialMediaCustom = [
  {
    id: 0,
    title: "Trang zalo",
    icon: "SiZalo",
    image:
      "https://atpsoftware.vn/wp-content/uploads//2020/03/20211208103735_id_zalo-1.jpg",
    style: "hover:text-blue-600 hover:bg-white ",
  },
  {
    id: 1,
    title: "Facebook cá nhân",
    icon: "BsFacebook",
    image:
      "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2slMjBsb2dvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    style: "hover:bg-white hover:text-blue-600",
  },

  {
    id: 5,
    title: "Trang Tiktok",
    icon: "FaTiktok",
    image: "https://images.alphacoders.com/112/1123670.png",
    style: "hover:bg-black hover:text-white p-1",
  },

  {
    id: 7,
    title: "Trang YouTube",
    icon: "BsYoutube",
    image:
      "https://img.nhandan.com.vn/Files/Images/2021/04/13/3A708284_F5B8_407D_ADC0_339DBEE-1618275907021.jpeg",
    style: "hover:bg-red-600 hover:text-white p-1",
  },
];

export const HeaderItems = [
  {
    label: "Trang Chủ",
    value: "",
  },
  {
    label: "Nhà Phố",
    value: "chuyen-muc/thiet-ke-nha-pho",
  },
  {
    label: "Biệt Thự",
    value: "chuyen-muc/thiet-ke-biet-thu",
  },
  {
    label: "Nội Thất",
    value: "chuyen-muc/thiet-ke-noi-that",
  },
  {
    label: "Dịch Vụ",
    value: "chuyen-muc/dich-vu-thiet-ke-thi-cong",
  },
  {
    label: "Tin tức",
    value: "chuyen-muc/tin-tuc-xay-dung",
  },
  {
    label: "Liên hệ",
    value: "lien-he",
  },
  {
    label: "Khai toán",
    value: "khai-toan",
  },
];

export const ToolsTipsSocialMediaItems = [
  {
    title: "zalo.me/...",
  },
  {
    title: "www.facebook.com/...",
  },
  {
    title: "www.facebook.com/plugins/page.php?href=....",
  },
  {
    title: "",
  },
  {
    title: "www.instagram.com/...",
  },
  {
    title: "www.tiktok.com/...",
  },
  {
    title: "www.twitter.com/...",
  },
  {
    title: "www.youtube.com/...",
  },
];

/*<-------------------------------------------------------------------------------------------------------------------- CUSTOM --------------------------------------------------------------------------------------------------------------------> */

export const TypeProductItems2 = [
  {
    label: "Sản phẩm khuyến mãi",
    value: "san-pham-khuyen-mai",
  },
  {
    label: "Sản phẩm bán chạy",
    value: "san-pham-ban-chay",
  },
  {
    label: "Sản phẩm mới",
    value: "san-pham-moi",
  },
  {
    label: "Sản phẩm nổi bật",
    value: "san-pham-noi-bat",
  },
];

export const PolicyItems = [
  {
    label: "Giao nhận hàng",
    value: "giao-nhan-hang",
  },
  {
    label: "Chính sách đổi trả",
    value: "chinh-sach-doi-tra",
  },
  {
    label: "Chính sách đặt hàng",
    value: "chinh-sach-dat-hang",
  },
  {
    label: "Chính sách bảo mật",
    value: "chinh-sach-bao-mat",
  },
];

export {};
