import Tile from "./Tile.class.js";

export default class TileManager {
  constructor(list, type, generateRandomElement, score) {
    this.tiles = list;
    this.type = type;
    this.generateRandomElement = generateRandomElement;
    this.score = score;
  }

  mount() {
    this.tilesMounted = this.tiles.map((el) =>
      new Tile(
        el.id,
        el.name,
        el.symbol,
        el.AtomicMass,
        el.link,
        this.type,
        this.generateRandomElement,
        this.score
      ).render()
    );

    return this;
  }
}
