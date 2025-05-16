import { ThreeDots } from "react-loader-spinner";
import css from "./SuspenseFallback.module.css";
import { useResizeWindow } from "../../utils/resizeWindow";

export default function SuspenseFallback() {
  const sizeWindow = useResizeWindow();
  const size = sizeWindow < 768 ? 20 : 40;
  return (
    <div className={css.wraper}>
      <div className={css.box}>
        <h3 className={css.text}>Loading</h3>

        <div className={css.loader}>
          <ThreeDots
            visible={true}
            height={size + 10}
            width={size}
            color="#e44848"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </div>
    </div>
  );
}
