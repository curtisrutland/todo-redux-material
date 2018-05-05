import * as localForage from "localforage";

export default {
  async getItems() {
    const items = await localForage.getItem("items");
    if(items) return items;
    else return [];
  },

  async setItems(items) {
    await localForage.setItem("items", items);
  }
};