import { load } from "react-tooling";
import * as Root from "./Root";
import { Route, toUri, fromUri } from "./routes";
import { DispatchUpdate } from "react-tooling/dist/dispatcher";

load(
  Root.State,
  Root.view,
  toUri,
  fromUri,
  module,
  {
    onInit: (_state: Root.State, _dispatch: DispatchUpdate<Root.State>) => {},
    onRouteChanged: (_route: Route, _dispatch: DispatchUpdate<Root.State>) => {}
  },
  { baseUri: "app" }
);

