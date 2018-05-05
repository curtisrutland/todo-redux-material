import * as localForage from "localforage";

const SHOW_COMPLETED = "SHOW_COMPLETED";
const ITEMS = "ITEMS";

export async function getTodos() {
  const items = await localForage.getItem(ITEMS);
  if (items) return items;
  else return [];
}

export async function setTodos(items) {
  await localForage.setItem(ITEMS, items);
}

export async function getShowCompleted() {
  const showCompleted = await localForage.getItem(SHOW_COMPLETED);
  return showCompleted == null ? true : showCompleted;
}

export async function setShowCompleted(showCompleted) {
  await localForage.setItem(SHOW_COMPLETED, showCompleted);
}
