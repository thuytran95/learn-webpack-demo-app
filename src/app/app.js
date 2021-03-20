import { inputsAreValid } from "./utils/input-are-valid";
import { parseInputs } from "./utils/parse-input";

export const run = (alertSevice, componentService) => {
  alertSevice.hideErrors();

  componentService.onClick(() => {
    alertSevice.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentService.setResult(numA + numB);
    } else {
      componentService.setResult("");
      alertSevice.handleAdditionError(inputs, parsedInputs);
    }
  });
};
