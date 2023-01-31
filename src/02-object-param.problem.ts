import { expect, it } from "vitest";

interface addNumberProps {
  first: number;
  second: number;
}

// These commented solutions can also work
// type NewType = { first: number; second: number };

// export const addTwoNumbers = (params: { first: number; second: number }) => {
//   return params.first + params.second;
// };

export const addTwoNumbers = (params: addNumberProps) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
