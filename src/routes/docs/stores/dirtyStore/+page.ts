import source from '$lib/stores/dirtyStore.ts?raw';
import pageSource from './+page.md?raw';

export async function load() {
  return {
    meta: {
      source,
      pageSource,
    },
  };
}
