let knightPosition = [0, 0];
let observer = null;

function emitChange() {
    observer(knightPosition);
}

export function observe(o) {
    if (observer) {
        throw new Error('multiple observers not implemented');
    }
    observer = o;
    emitChange();
}

export function moveKnight(...position) {
    knightPosition = position;
    emitChange();
}