import readFile from "../index";

test('Has to be a function', () => {
    expect(typeof readFile).toBe("function");
  });