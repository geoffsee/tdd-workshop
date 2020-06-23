import MyClass from "../MyClass";

describe("MyClass", () => {

  test('adds 1 + 2 to equal 3', () => {
    const myClass = new MyClass();
    expect(myClass.sum(1, 2)).toBe(3);
  });

})
