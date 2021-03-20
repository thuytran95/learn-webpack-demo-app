const alertSevice = new AlertService();
const componentService = new ComponentService();
const run = (alertSevice, componentService) => {
  alertSevice.hideErrors();

  componentService.onClick(() => {
    alertSevice.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentService.innerText = numA + numB;
    } else {
      componentService.innerText = "";
      alertSevice.handleAdditionError(inputs, parsedInputs);
    }
  });
};

run(alertSevice, componentService);
