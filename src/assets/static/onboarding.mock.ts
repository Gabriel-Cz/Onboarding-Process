enum Actions {
  CHANGE_LIGHT,
  END_ONBOARDING,
  END_SURPRISE
}

export default {
  ['GET STARTED']: {
    title: "Let's get started!",
    description: "This is your first step to start this process. <i>Click in continue!</i>",
    isDone: false,
  },
  ['VISIT PAGE']: {
    title: "First off, you gotta to know your workspace.",
    description: "This is your second step to start this process. <i>Click in continue!</i>",
    isDone: false,
    options: {
      to: '/response'
    }
  },
  ['ACTION']: {
    title: "Let's change the light of your browser.",
    description: "To switch the light of your browser click in Accept...",
    isDone: false,
    options: {
      actions: [Actions.CHANGE_LIGHT],
    }
  },
  ['END']: {
    title: "END",
    description: "This is the end of your proccess. Accept one of the following options.",
    isDone: false,
    options: {
      actions: [Actions.END_ONBOARDING, Actions.END_SURPRISE],
    }
  },
}