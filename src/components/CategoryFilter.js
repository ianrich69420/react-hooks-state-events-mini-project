import React from "react";

export default function CategoryFilter({categories,click}) {
  const buttons = categories.map((category, ind) => {
    return (
      <button key={ind} className={category} onClick={() => click(category)} >{category} </button>
    )
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}