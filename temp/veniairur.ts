class SideHustle {
  private _sideHustle: number;

  constructor(sideHustle: number) {
    this._sideHustle = sideHustle;
  }

  get sideHustle(): number {
    return this._sideHustle;
  }

  set sideHustle(value: number) {
    if (value >= 0) {
      this._sideHustle = value;
    } else {
      console.error('Value must be non-negative');
    }
  }
}

// Usage
const mySideHustle = new SideHustle(1000);
console.log(mySideHustle.sideHustle); // Outputs: 1000
mySideHustle.sideHustle = 1500; // Updates the value to 1500
