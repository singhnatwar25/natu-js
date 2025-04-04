let mountQueue: (() => void)[] = [];

export function onMount(fn: () => void) {
    mountQueue.push(fn);
}

export function runMountEffects() {
    mountQueue.forEach((fn) => fn());
    mountQueue = [];
}
