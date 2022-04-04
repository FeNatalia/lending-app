import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SideBar() {
  const currentPage = useLocation().pathname;
  return (
    <div className="SideBar">
      <Link
        to="/profile"
        className={`sidebar--link ${currentPage === "/profile" && "active"}`}
      >
        My Profile
      </Link>
      <Link
        to="/help"
        className={`sidebar--link ${currentPage === "/help" && "active"}`}
      >
        Help
      </Link>

      <Link
        to="/chat"
        className={`sidebar--link ${currentPage === "/chat" && "active"
          }`}
      >
        My Messages
      </Link>
    </div>
  );
}
