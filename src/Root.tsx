import { React, RootDispatcher /*, createDispatch*/ } from "react-tooling";
import { page1, page2, Route, RouteType } from "./routes";

export interface State {
  route: Route;
}

export const State: State = {
  route: page1
};

type Root = (props: State & RootDispatcher<State, Route>) => JSX.Element;

const Root: Root = ({ dispatch, setRoute, ...state }) => {
  switch (state.route.type) {
    case RouteType.Page1:
      return (
        <div>
          Hello1, <a onClick={() => setRoute(page2)}>to page2</a>
        </div>
      );
    case RouteType.Page2:
      return (
        <div>
          Hello2, <a onClick={() => setRoute(page1)}>to page1</a>
        </div>
      );
  }
  return <div>404</div>;
};

export const view = Root;
