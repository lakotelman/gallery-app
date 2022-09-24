import { describe, test, expect } from "vitest";
import { totalGalleryGrid, getDots } from "./operations";

describe("test Gallery Grid helper", () => {
  const testArray = [
    { width: 5, height: 7 },
    { width: 5, height: 7 },
    { width: 5, height: 7 },
    { width: 5, height: 7 },
  ];
  const testGap = 2;
  test("total gallery grid: basic grid", () => {
    const testLayout = [2, 2];
    const galleryGrid = totalGalleryGrid(testArray, testGap, testLayout);
    expect(galleryGrid).toEqual([12, 16]);
  });

  test("total gallery grid: row", () => {
    const testLayout = [4];
    const galleryGrid = totalGalleryGrid(testArray, testGap, testLayout);
    expect(galleryGrid).toEqual([26, 7]);
  });
  test("gallery grid: throw error for incorrect grid", () => {
    const testLayout = [5];
    expect(() => totalGalleryGrid(testArray, testGap, testLayout)).toThrow();
  });
});

describe("test getDots", ()=>{ 
    const testArray = [
        { width: 5, height: 7 },
        { width: 5, height: 7 },
        { width: 5, height: 7 },
        { width: 5, height: 7 },
      ]; 
      const testGap = 2 
      const testLayout = [2,2]
    test("getDots return the correct start point: simplest", ()=> { 
        const testTotalWall = [12, 16] 
        const startPoint = getDots(testArray, testGap, testLayout, testTotalWall)
        expect(startPoint).toEqual([0,0])
    })
    test("getDots return correct startpoint: actual", ()=> { 
        const testTotalWall = [25, 32]
        const startPoint = getDots(testArray, testGap, testLayout, testTotalWall)
        expect(startPoint).toEqual([6.5, 8])
    })
})
