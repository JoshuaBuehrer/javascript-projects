// launchcode.test.js code:
const launchcode = require("../index.js");

describe("Testing launchcode", function () {
  // Write your unit tests here!
  test("if organization value is: non profit", () => {
    expect(launchcode.organization).toEqual("non profit");
  });

  test("if executiveDirector value is: Jeff", () => {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("if percentageCoolEmployees is: 100", () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test('if programsOffered value is: "["Web Development", "Data Analysis", "Liftoff"]"', () => {
    expect(launchcode.programsOfferd[0]).toEqual("Web Development")
    expect(launchcode.programsOfferd[1]).toEqual("Data Analysis")
    expect(launchcode.programsOfferd[2]).toEqual("Liftoff")
    expect(launchcode.programsOfferd.length).toEqual(3)
  });

  test("if launchOutput returns 'Launch!' if num is only divisible by 2", () => {
    output1 = launchcode.launchOutput(2);
    expect(output1).toBe('Launch!');
  });

  test("if launchOutput returns 'Code!' if num is only divisible by 3", () => {
    output2 = launchcode.launchOutput(3);
    expect(output2).toBe('Code!');
  });

  test("if launchOutput returns 'Rocks!' if num is only divisible by 5", () => {
    output3 = launchcode.launchOutput(5);
    expect(output3).toBe('Rocks!');
  });

  test("if launchOutput returns 'LaunchCode!' if num is divisible by  both 2 & 3", () => {
    output4 = launchcode.launchOutput(6);
    expect(output4).toBe('LaunchCode!');
  });

  test("if launchOutput returns 'Code Rock!' if num is divisible by both 3 & 5", () => {
      output5 = launchcode.launchOutput(15);
      expect(output5).toBe('Code Rocks!');  
  });

  test("if launchOutput returns 'Launch Rocks! (CRASH!!!!)' if num is divisible by both 2 & 5", () => {
    output6 = launchcode.launchOutput(10);
    expect(output6).toBe('Launch Rocks! (CRASH!!!!)');  
  });

  test("if launchOutput returns 'LaunchCode Rocks!' if num is divisible by 2, 3, & 5", () => {
    output7 = launchcode.launchOutput(30);
    expect(output7).toBe('LaunchCode Rocks!');  
});

test("if launchOutput returns 'Rutabagas! That doesn't work.!' if num is not divisible by 2, 3, or 5", () => {
  output8 = launchcode.launchOutput(7);
  expect(output8).toBe("Rutabagas! That doesn't work.");  
});
});
