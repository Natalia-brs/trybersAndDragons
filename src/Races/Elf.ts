import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instances();
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
    
  static createdRacesInstances(): number {
    return this._instances;
  }
}