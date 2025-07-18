import { useEffect } from "react";
import "./style.css";

type MagicObj = {
  x: number;
  y: number;
};

export type MenuItem = {
  label: string;
  path: string;
  target?: "_blank" | "_self";
  subs?: MenuItem[];
};

type Props = {
  ulClsStyles?: string;
  liClsStyles?: string;
  data?: MenuItem[];
};

const MagicMenuTriangle = ({ ulClsStyles, liClsStyles, data }: Props) => {
  let in_magic_triangle = false;
  let previous_X = 0;
  let MAGIC_A: MagicObj, MAGIC_B: MagicObj, MAGIC_C: MagicObj;

  const area = (A: MagicObj, B: MagicObj, C: MagicObj) => {
    return Math.abs(
      (A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y)) / 2
    );
  };
  const pointInTriangle = function (
    D: MagicObj,
    A: MagicObj,
    B: MagicObj,
    C: MagicObj
  ) {
    var ABD = area(A, B, D);
    var BDC = area(B, D, C);
    var CAD = area(C, A, D);
    var ABC = area(A, B, C);
    if (ABC == ABD + BDC + CAD) {
      return true;
    }
    return false;
  };
  const siblings = function (node: any, siblingName: string | null) {
    return [...node?.parentNode?.children].filter((c) =>
      siblingName ? c.className === siblingName : c !== node
    );
  };

  useEffect(() => {
    const aEle = document.querySelectorAll(".menu .menu-item a");
    const magicTriangle = document.getElementById(
      "magic-triangle"
    ) as HTMLElement;
    aEle.forEach(function (ele) {
      ele.addEventListener("mousemove", function (e: any) {
        const item = e.target as any;
        const parentItem = item.closest(".menu-item");
        if (!in_magic_triangle) {
          parentItem.classList.add("active");
          const itemSiblings = siblings(parentItem, null);
          const itemSiblingsSubMenu = siblings(item, "sub-menu");
          itemSiblings.forEach((itemSibling) =>
            itemSibling.classList.remove("active")
          );

          MAGIC_A = { x: e.pageX, y: e.pageY };
          MAGIC_B = {
            x: itemSiblingsSubMenu?.[0]?.offsetLeft,
            y: itemSiblingsSubMenu?.[0]?.offsetTop,
          };
          MAGIC_C = {
            x: itemSiblingsSubMenu?.[0]?.offsetLeft,
            y:
              itemSiblingsSubMenu?.[0]?.offsetTop +
              itemSiblingsSubMenu?.[0]?.offsetHeight,
          };
          magicTriangle.setAttribute(
            "points",
            MAGIC_A.x +
              "," +
              MAGIC_A.y +
              " " +
              MAGIC_B.x +
              "," +
              MAGIC_B.y +
              " " +
              MAGIC_C.x +
              "," +
              MAGIC_C.y +
              " "
          );
          in_magic_triangle = true;
        } else {
          const D = { x: e.pageX, y: e.pageY };
          if (
            e.pageX < previous_X ||
            !pointInTriangle(D, MAGIC_A, MAGIC_B, MAGIC_C)
          ) {
            in_magic_triangle = false;
          }
          previous_X = e.pageX;
        }
      });
    });
  }, []);

  return (
    <>
      <svg>
        <polygon
          id="magic-triangle"
          points=""
          style={{
            fill: "lime",
            stroke: "purple",
            strokeWidth: 0,
          }}
        />
      </svg>
      <ul className={`menu ${ulClsStyles || ""}`}>
        {data?.map((item, itemIndex) => (
          <li
            className={`menu-item ${liClsStyles || ""}`}
            key={item.path + "-" + itemIndex}
          >
            <a href={item.path} target={item.target}>
              {item.label}
            </a>
            {item?.subs && item.subs.length > 0 && (
              <ul className="sub-menu">
                {item.subs.map((subItem, subIndex) => (
                  <li className="sub-menu-item">
                    <a href={subItem.path} target={subItem?.target}>
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        {/* <li className="menu-item">
          <a href="#">menu 1</a>
          <ul className="sub-menu">
            <li className="sub-menu-item">sub menu 1</li>
            <li className="sub-menu-item">sub menu 1</li>
            <li className="sub-menu-item">sub menu 1</li>
            <li className="sub-menu-item">sub menu 1</li>
            <li className="sub-menu-item">sub menu 1</li>
            <li className="sub-menu-item">sub menu 1</li>
            <li className="sub-menu-item">sub menu 1</li>
            <li className="sub-menu-item">sub menu 1</li>
          </ul>
        </li>
          </ul>
        </li> */}
      </ul>
    </>
  );
};

export default MagicMenuTriangle;
