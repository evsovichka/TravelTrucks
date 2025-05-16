import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import css from "./PhotoList.module.css";

export default function PhotoList({ data, name }) {
  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames={css.list}
    >
      {data.map((photo, index) => {
        return (
          <a href={photo.original} data-lightgallery="item" key={index}>
            <img src={photo.thumb} alt={` Photo ${name}`} className={css.img} />
          </a>
        );
      })}
    </LightGallery>
  );
}
