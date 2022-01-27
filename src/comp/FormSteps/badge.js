import React from "react";
import { HiX } from "react-icons/hi";
import "./badge.css";

function Badge({ list, deleteItem }) {
  function handleDelete(e) {
    let id = e.target.dataset.id;

    let newelm = list.filter((elm) => {
      return elm.id !== id;
    });
    deleteItem([...newelm]);
  }

  return (
    <>
      {list.length > 0
        ? list.map((data, i) => {
            if (data && data.id !== undefined) {
              return (
                <div className="badge-cont" key={i}>
                  {i}
                  <HiX
                    className="icon"
                    data-id={data.id}
                    onClick={handleDelete}
                  />
                </div>
              );
            }
            return "";
          })
        : ""}
    </>
  );
}

export default Badge;
