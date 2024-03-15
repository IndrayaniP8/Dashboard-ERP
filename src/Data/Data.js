import{
    UilDashboard,
    UilClipboardAlt,
    UilPackage,
    UilUsersAlt,
    UilCalender,
    UilUsdSquare,
}from "@iconscout/react-unicons";


import img6 from "../imgs/img6.jpg"


export const SidebarData = [
    {
        icon: UilDashboard,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },
    {
        icon: UilPackage,
        heading: "Products",
    },
    {
        icon: UilUsersAlt,
        heading: "Customers",
    },
    {
        icon: UilCalender,
        heading: "Events",
    },
 
];

export const StatsData = [
    {
         title: "Products",
    color: {
      backGround: "linear-gradient(180deg, #B33030 0%, #DF7857 100%)",
      boxShadow: "0px 10px 20px 0px #EDEDED",
    },
    barValue: 70,
    value: "25,970",
    png: UilPackage,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Orders",
    color: {
      backGround: "linear-gradient(180deg, #E3651D 0%, #FFA559 100%)",
      boxShadow: "0px 10px 20px 0px #EDEDED",
    },
    barValue: 68,
    value: "14,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Sale",
    color: {
      backGround:
        "linear-gradient(180deg, #446A46 0%, #82A284 100%)",
      boxShadow: "0px 10px 20px 0px #EDEDED",
    },
    barValue: 70,
    value: "234,270",
    png: UilUsdSquare,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];
export const UpdatesData = [
  {
    img: img6,
    name: "Andrea Thomas",
    noti: "Ordered Bella Vita Organic Women Perfume.",
    time: "25 seconds ago",
  },
  {
    img: img6,
    name: "James Basset",
    noti: "has received Arrabi Ceramic Cup set .",
    time: "30 minutes ago",
  },
  {
    img: img6,
    name: "Ira Patel",
    noti: "has ordered Dressberry sequinned crop.",
    time: "2 hours ago",
  },
];