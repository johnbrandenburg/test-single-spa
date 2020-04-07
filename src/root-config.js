import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@test-org/navbar",
  () => System.import("@test-org/navbar"),
  isActive.navbar
);

start();