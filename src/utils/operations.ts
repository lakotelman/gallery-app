interface GridItem {
  width: number;
  height: number;
}

// ** itemsArray will be a list of objects with a width and a height in inches
const testArray = [
  { width: 5, height: 7 },
  { width: 5, height: 7 },
  { width: 5, height: 7 },
  { width: 5, height: 7 },
];

// ** layout will contain how they would like the items to be arranged
// ** each input will be a row and the value will represent how many items they would like. So this will have 2 rows with 2 items in each row
const testLayout = [2, 2];

// ** gap will say how far apart they would like their gutters to be on all sides in inches
const testGap = 2;

function sum(nums: number[]){ 
  return nums.reduce((a, b) => a + b)
}

//** the output of this gives the width and height of all the items with their gaps
export const totalGalleryGrid = (
  itemsArr: GridItem[],
  gap: number,
  layout: number[]
):number[]=> {
  if (itemsArr.length !== sum(layout)){ 
     throw new Error("Items in layout not equal to items provided.");
  }
  let width = 0;
  let height = 0;
  for (let i = 0; i < layout[0]; i++) {
    width += itemsArr[i].width;
  }
  for (let i = 0; i < layout.length; i++) {
    height += itemsArr[i].height;
  }
  return [width + gap * (layout[0] - 1), height + gap * (layout.length - 1)];
};

// ** total Wall represnts the width and height of the space that they would like to put their images on
const testTotalWall = [25, 32];

// ** the output of this will be the start point for the top left corner item
export const getDots = (
  itemsArr: GridItem[],
  gap: number,
  layout: number[],
  totalWall: number[]
): number[] => {
  const allPicsDims = totalGalleryGrid(itemsArr, gap, layout);
  const topCornerX = totalWall[0] / 2 - allPicsDims[0] / 2;
  const topCornerY = totalWall[1] / 2 - allPicsDims[1] / 2;
  return [topCornerX, topCornerY];
};

