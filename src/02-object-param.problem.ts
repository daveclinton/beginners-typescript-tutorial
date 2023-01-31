import { expect, it } from "vitest";

// Create an Interface
interface addNumberProps {
  first: number;
  second: number;
}

// Named Type
// type NewType = { first: number; second: number };

// Pass an Object Type Directly
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
