// Simple localStorage-based storage for watches
const KEY = 'chronovault:watches';

function readAll() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read storage', e);
    return [];
  }
}

function writeAll(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function getWatches() {
  return readAll();
}

export function addWatch(watch) {
  const list = readAll();
  list.unshift({ id: Date.now().toString(), createdAt: Date.now(), ...watch });
  writeAll(list);
  return list;
}

export function updateWatch(id, updates) {
  const list = readAll().map(w => (w.id === id ? { ...w, ...updates } : w));
  writeAll(list);
  return list;
}

export function removeWatch(id) {
  const list = readAll().filter(w => w.id !== id);
  writeAll(list);
  return list;
}
