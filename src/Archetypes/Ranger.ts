import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.instances();
  }

  static createdArchetypeInstances(): number {
    return this._instances;
  }

  get energyType() {
    return this._energyType;
  }
}