import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.instances();
  }

  static createdArchetypeInstances(): number {
    return this._instances;
  }

  get energyType() {
    return this._energyType;
  }
}