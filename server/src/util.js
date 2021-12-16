const wallSymbol = {
  type: 'simple-fill', // autocasts as new SimpleFillSymbol()
  color: [153, 255, 255, 1],
  outline: {
    // autocasts as new SimpleLineSymbol()
    color: [0, 0, 0],
    width: 2,
  },
};

const floorSymbol = {
  type: 'simple-fill', // autocasts as new SimpleFillSymbol()
  color: [0, 51, 51, 1],
  outline: {
    // autocasts as new SimpleLineSymbol()
    color: [0, 51, 51],
    width: 2,
  },
};

const lineSymbol = {
  type: 'simple-line', // autocasts as SimpleLineSymbol()
  color: [0, 51, 51],
  width: 5,
};

const doorSymbol = {
  type: 'simple-fill', // autocasts as new SimpleFillSymbol()
  color: [255, 255, 255, 1],
  outline: {
    // autocasts as new SimpleLineSymbol()
    color: [255, 255, 255],
    width: 2,
  },
};

const renderFloor = (ringNumbers, rings) => {
  const floor = [];

  for (let i = 0; i <= ringNumbers; i++) {
    let r1, r2, r3, r4;

    if (i < ringNumbers) {
      r1 = rings[i];
      r2 = rings[i + 1];
      r3 = [rings[i + 1][0], rings[i + 1][1] + 0.00000000000001, 10];
      r4 = [rings[i][0], rings[i][1] + 0.00000000000001, 10];
    } else {
      r1 = rings[ringNumbers];
      r2 = rings[0];
      r3 = [rings[0][0], rings[0][1] + 0.00000000000001, 10];
      r4 = [
        rings[ringNumbers][0],
        rings[ringNumbers][1] + 0.00000000000001,
        10,
      ];
    }

    let f = {
      type: 'polygon',
      rings: [r1, r2, r3, r4],
    };

    floor.push(f);
  }

  return floor;
};

const renderWall = (ringNumbers, rings, height = 45) => {
  const wall = [];

  for (let i = 0; i <= ringNumbers; i++) {
    let w1, w2, w3, w4;

    if (i < ringNumbers) {
      w1 = [rings[i][0], rings[i][1], 10];
      w2 = [rings[i + 1][0], rings[i + 1][1], 10];
      w3 = [rings[i + 1][0], rings[i + 1][1] + 0.00000000000001, height];
      w4 = [rings[i][0], rings[i][1] + 0.00000000000001, height];
    } else {
      w1 = [rings[ringNumbers][0], rings[ringNumbers][1], 10];
      w2 = [rings[0][0], rings[0][1], 10];
      w3 = [rings[0][0], rings[0][1] + 0.00000000000001, height];
      w4 = [
        rings[ringNumbers][0],
        rings[ringNumbers][1] + 0.00000000000001,
        height,
      ];
    }

    let w = {
      type: 'polygon',
      rings: [w1, w2, w3, w4],
    };

    wall.push(w);
  }

  return wall;
};

const renderLine = (lineNumber, ringNumbers, rings) => {
  const lines = [];

  for (let i = 0; i <= lineNumber; i++) {
    let l = [];

    if (i === 0) {
      for (let j = 0; j <= ringNumbers + 1; j++) {
        if (j < ringNumbers + 1) {
          l.push([rings[j][0], rings[j][1], 12.5]);
        } else {
          l.push([rings[0][0], rings[0][1], 12.5]);
        }
      }
    } else {
      for (let j = 0; j <= ringNumbers + 1; j++) {
        if (j < ringNumbers + 1) {
          l.push([rings[j][0], rings[j][1], 12.5 + i * 5]);
        } else {
          l.push([rings[0][0], rings[0][1], 12.5 + i * 5]);
        }
      }
    }

    let line = {
      type: 'polyline', // autocasts as new Polyline()
      paths: l,
    };

    lines.push(line);
  }

  return lines;
};

const renderWindow = (windowNumber, rings) => {
  const window = [];

  for (let i = 0; i <= windowNumber; i++) {
    let w1 = [rings[0][0], rings[0][1], 11 + i * 2.5];
    let w2 = [rings[1][0], rings[1][1], 11 + i * 2.5];
    let w3 = [rings[1][0], rings[1][1] + 0.00000000000001, 12 + i * 2.5];
    let w4 = [rings[0][0], rings[0][1] + 0.00000000000001, 12 + i * 2.5];

    let w = {
      type: 'polygon',
      rings: [w1, w2, w3, w4],
    };

    window.push(w);
  }

  return window;
};

export {
  wallSymbol,
  floorSymbol,
  lineSymbol,
  doorSymbol,
  renderFloor,
  renderWall,
  renderLine,
  renderWindow,
};
