import { Responsive, WidthProvider, GridLayout } from "react-grid-layout";

const Demo = () => {
  // {lg: layout1, md: layout2, ...}
  const layout1 = [
    { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
    { i: "b", x: 1, y: 0, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 },
    { i: "c", x: 2, y: 0, w: 1, h: 1 },
    { i: "d", x: 3, y: 0, w: 1, h: 1 },
  ];
  const layout2 = [
    { i: "a", x: 0, y: 0, w: 1, h: 3 },
    { i: "b", x: 5, y: 0, w: 1, h: 1, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];
  const layouts = { lg: layout1, md: layout2 };
  const ResponsiveGridLayout = WidthProvider(Responsive);

  function onLayoutChange() {
    console.log(layout1);
  }
  return (
    // <GridLayout
    //   className="layout  text-white"
    //   layout={layout1}
    //   cols={3}
    //   rowHeight={30}
    //   width={1200}
    //   onLayoutChange={onLayoutChange}
    // >
    //   <div key="a" className="border">
    //     a
    //   </div>
    //   <div key="b" className="border">
    //     b
    //   </div>
    //   <div key="c" className="border">
    //     c
    //   </div>
    // </GridLayout>
    <ResponsiveGridLayout
      className="layout text-white"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
    >
      <div key="a" className="border">
        a
      </div>
      <div key="b" className="border">
        b
      </div>
      <div key="c" className="border">
        c
      </div>
      <div key="d" className="border">
        d
      </div>
    </ResponsiveGridLayout>
  );
};

export default Demo;
