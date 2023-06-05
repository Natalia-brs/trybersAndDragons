import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.instances();
  }

  static createdArchetypeInstances(): number {
    return this._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}