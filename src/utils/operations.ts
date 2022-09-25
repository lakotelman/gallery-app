interface GridItem {
  width: number;
  height: number;
}
//* Example ItemsList */
//  const testItems = [
//   item1: { width: 5, height: 7 },
//   item2: { width: 5, height: 7 },
//   item3: { width: 5, height: 7 },
//   item4: { width: 5, height: 7 },
// ];

interface Layout {
  rows: number;
  columns: number;
}
// *Example* const testLayout = {rows: 2, columns: 2};

//** the output of this gives the width and height of all the items with their gaps
export const totalGalleryDimensions = (
  itemsList: GridItem[],
  gap: number,
  layout: Layout
): number[] => {
  if (itemsList.length !== layout.rows * layout.columns) {
    throw new Error("Items in layout not equal to items provided.");
  }
  let width = itemsList[0].width * layout.columns;
  let height = itemsList[0].height * layout.rows;
  let widthGutter = (layout.columns - 1) * gap;
  let heightGutter = (layout.rows - 1) * gap;

  
  return [width + widthGutter, height + heightGutter];
};

// ** total Wall represnts the width and height of the space that they would like to put their images on
interface wallDimensions {
  width: number;
  height: number;
}
const testTotalWall = {
  width: 25,
  height: 32,
};

// ** the output of this will be the start point for the top left corner item
export const getDots = (
  itemsArr: GridItem[],
  gap: number,
  layout: Layout,
  totalWall: wallDimensions
): number[] => {
  const allPicsDims = totalGalleryDimensions(itemsArr, gap, layout);
  const topCornerX = totalWall.width / 2 - allPicsDims[0] / 2;
  const topCornerY = totalWall.height / 2 - allPicsDims[1] / 2;
  return [topCornerX, topCornerY];
};
