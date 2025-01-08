import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import Card from "../Card";
export default function CardStacker({ data }) {
    return (_jsx("div", { className: "flex card-stacker py-10 select-none", children: data.map((eachData, index) => (_createElement(Card, { ...eachData, key: index, className: index !== 0 ? "-ml-32 shadow-[-5px_5px_10px_rgba(0,0,0,0.1)]" : "" }))) }));
}
