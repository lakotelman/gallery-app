import { describe, test, expect } from "vitest";
import { totalGalleryDimensions, getDots } from "./operations";

describe("test Gallery Grid helper", () => {
  const testArray = [
    { width: 5, height: 7 },
    { width: 5, height: 7 },
    { width: 5, height: 7 },
    { width: 5, height: 7 },
  ];
  const testGap = 2;
  test("total gallery grid: basic grid", () => {
    const testLayout = { rows: 2, columns: 2 };
    const galleryGrid = totalGalleryDimensions(testArray, testGap, testLayout);
    expect(galleryGrid).toEqual([12, 16]);
  });

  test("total gallery grid: row", () => {
    const testLayout = { rows: 1, columns: 4 };
    const galleryGrid = totalGalleryDimensions(testArray, testGap, testLayout);
    expect(galleryGrid).toEqual([26, 7]);
  });
  test("gallery grid: throw error for incorrect grid", () => {
    const testLayout = { rows: 1, columns: 1 };
    expect(() =>
      totalGalleryDimensions(testArray, testGap, testLayout)
    ).toThrow();
  });
});

describe("test getDots", () => {
  const testArray = [
    { width: 5, height: 7 },
    { width: 5, height: 7 },
    { width: 5, height: 7 },
    { width: 5, height: 7 },
  ];
  const testGap = 2;
  const testLayout = {rows: 2, columns: 2};
  test("getDots return the correct start point: simplest", () => {
    const testTotalWall = {width: 12, height: 16};
    const startPoint = getDots(testArray, testGap, testLayout, testTotalWall);
    expect(startPoint).toEqual([0, 0]);
  });
  test("getDots return correct startpoint: actual", () => {
    const testTotalWall = {width: 25, height: 32};
    const startPoint = getDots(testArray, testGap, testLayout, testTotalWall);
    expect(startPoint).toEqual([6.5, 8]);
  });
});
