import { TAuthUserPath, TRoute } from "@/routes/dashboard.route";

export const routesGenerator = (items: TAuthUserPath[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);

  return routes;
};
// export const routesGenerator = (items: TAuthUserPath[], parentPath = "") => {
//   const routes = items.reduce((acc: TRoute[], item) => {
//     const path = parentPath + (item.path || "");

//     if (item.element) {
//       acc.push({
//         path,
//         element: item.element,
//       });
//     }

//     if (item.children) {
//       const childRoutes = routesGenerator(item.children, path + "/");
//       acc.push(...childRoutes);
//     }

//     return acc;
//   }, []);

//   return routes;
// };
