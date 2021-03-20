import { run } from "./app/app";
import "./main.css";
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";

const alertSevice = new AlertService();
const componentService = new ComponentService();
run(alertSevice, componentService);
