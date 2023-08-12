import { PeopleIconSVG } from "@/assets/svg/icons";

// import { BsFillTrash3Fill } from "react-icons/bs";
const data = [
  {
    section: "Associados",
    icon: <PeopleIconSVG />,
    href: "associados",
    content: [
      {
        title: "Create",
        link: "/user/create",
      },
      {
        title: "Update",
        link: "/user/update",
      },
      {
        title: "Delete",
        link: "/user/delete",
      },
    ],
  },
];

export default data;
