const operations = [
  {
    func: (args, cb) => {
      const result = `Função 1 executada com o argumento ${args}`;
      cb(result);
    },
    args: "arg1",
  },
  {
    func: (args, cb) => {
      const result = `Função 2 executada com o argumento ${args}`;
      cb(result);
    },
    args: "args2",
  },
  {
    func: (args, cb) => {
      const result = `Função 3 executada com o argumento ${args}`;
      cb(result);
    },
    args: "args3",
  },
];

function executeFunctionWithArgs(operation, callback) {
  const { args, func } = operation;
  func(args, callback);
}

function serialProcedure(operation) {
  if (!operation) process.exit();
  executeFunctionWithArgs(operation, function (result) {
    console.log(result);
    serialProcedure(operations.shift());
  });
}

serialProcedure(operations.shift());
