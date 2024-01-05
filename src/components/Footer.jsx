import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer classname="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div classname="col-md-4 d-flex align-items-center">
        <Link
          to="/"
          classname="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        ></Link>
        <span classname="text-muted">© 2023 Food, Inc</span>
      </div>
    </footer>
  );
}
