import React from "react";
import { HiX } from "react-icons/hi";
import "./badge.css";

function Badge({ list, deleteItem }) {
  function handleDelete(e) {
    let id = e.target.dataset.id;

    let newelm = list.filter((elm) => {
      return elm.id !== id;
    })[0];

    // return console.log(id, newelm);
    deleteItem([newelm]);
  }

  return (
    <>
      {list.length > 0
        ? list.map((data, i) => {
            return (
              <div className="badge-cont" key={i}>
                {i}
                <span
                  className="icon"
                  data-id={data.id === undefined ? "" : data.id}
                  onClick={handleDelete}
                >
                  x
                </span>
              </div>
            );
          })
        : ""}
    </>
  );
}

export default Badge;
