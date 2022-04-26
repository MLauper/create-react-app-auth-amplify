import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Items {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  constructor(init: ModelInit<Items>);
  static copyOf(source: Items, mutator: (draft: MutableModel<Items>) => MutableModel<Items> | void): Items;
}