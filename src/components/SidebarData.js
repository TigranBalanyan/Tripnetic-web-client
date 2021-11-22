import React from "react";
import * as FAIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import { ClassNames } from "@emotion/react";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiOutlineHome />,
        cName: "nav-text"
    },
    {
        title: "Routes",
        path: "/Route",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
    }
]