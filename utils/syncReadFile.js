import { readFileSync } from 'fs';

function syncReadFile(filename) {
    const contents = readFileSync(filename, "utf-8");
    return contents.split(/\r?\n/);
}

export { syncReadFile }