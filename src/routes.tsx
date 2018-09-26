export type Route = Page1 | Page2;

export enum RouteType {
  Page1 = "Page1",
  Page2 = "Page2"
}

export interface Page1 {
  type: RouteType.Page1;
}
export interface Page2 {
  type: RouteType.Page2;
}

export const page1: Page1 = { type: RouteType.Page1 };
export const page2: Page2 = { type: RouteType.Page2 };

export const toUri = (route: Route) => {
  switch (route.type) {
    case RouteType.Page1:
      return "page1";
    case RouteType.Page2:
      return "page2";
  }
};

export const fromUri = (uri: string): Route => {
  switch (uri) {
    case "page1":
      return page1;
    case "page2":
      return page2;
    default:
      return page1;
  }
};
