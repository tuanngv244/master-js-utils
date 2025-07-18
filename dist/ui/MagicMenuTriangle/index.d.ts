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
declare const MagicMenuTriangle: ({ ulClsStyles, liClsStyles, data }: Props) => import("react/jsx-runtime").JSX.Element;
export default MagicMenuTriangle;
