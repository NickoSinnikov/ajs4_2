import sortHealth from "../app";

test("should sort for health", () => {
  const input = [
    { name: "Mar", health: 40 },
    { name: "Mar", health: 70 },
    { name: "Mar", health: 50 },
    { name: "Mar", health: 90 },
    { name: "Mar", health: 10 },
  ];

  const expected = [
    { name: "Mar", health: 90 },
    { name: "Mar", health: 70 },
    { name: "Mar", health: 50 },
    { name: "Mar", health: 40 },
    { name: "Mar", health: 10 },
  ];

  const received = sortHealth(input);

  expect(received).toEqual(expected);
  expect(received).not.toBe(expected);
});
