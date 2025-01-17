export = {
  extends: ["./configs/base"],
  rules: {
    "total-functions/no-unsafe-type-assertion": "error",
    "total-functions/no-unsafe-readonly-mutable-assignment": "error",
    "total-functions/no-unsafe-mutable-readonly-assignment": "error",
    "total-functions/no-unsafe-optional-property-assignment": "error",
    "total-functions/require-strict-mode": "error",
  },
};
