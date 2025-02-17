import categories from "../../data/categories.jsx";
import React from "react";
import css from "./CategoriesList.module.css";

export default function CategoriesList({ item, limit, size }) {
  function getProductCategories(product) {
    return categories
      .filter((category) => product[category.name])
      .map((category) => ({
        name: category.name.charAt(0).toUpperCase() + category.name.slice(1),
        icon: React.cloneElement(category.icon, { size }),
      }));
  }

  const itemCategories = getProductCategories(item);

  if (!item || !itemCategories.length) {
    return <li>No categories available</li>;
  }

  const categoriesToDisplay = limit
    ? itemCategories.slice(0, limit)
    : itemCategories;

  return (
    <ul className={css.list}>
      {categoriesToDisplay.map((category) => {
        return (
          <li key={category.name} className={css.item}>
            {category.icon}
            {category.name}
          </li>
        );
      })}
    </ul>
  );
}
