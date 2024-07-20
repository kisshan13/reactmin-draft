import type { ResgiterApiOptions } from "../types";

export default class ApiManager {
  #resource: string;
  #methods: ResgiterApiOptions;

  constructor(resource: string) {
    this.#resource = resource;
    this.#methods = {} as ResgiterApiOptions;
    // this.
  }

  registerApi({ findOne, find, update, del, create }: ResgiterApiOptions) {
    this.#methods = { findOne, find, update, del, create };
  }

  getResourceApi(
    resource: string,
    type: "create" | "find" | "update" | "del" | "findOne"
  ) {
    if (resource === this.#resource) {
      return this.#methods[type] || (() => {});
    }

    return false;
  }
}
