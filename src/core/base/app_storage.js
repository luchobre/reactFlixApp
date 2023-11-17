// const appStorage = {
//     get: async (key) => {
//         return localStorage.getItem(key);
//     }
// }


export class AppStorage {
    static async save(key, value) {
    return await localStorage.setItem(key, JSON.stringify(value));
    }

    static async get(key) {
    return await JSON.parse(localStorage.getItem(key));
    }

    static async remove(key) {
    return await localStorage.removeItem(key);
    }

    static async clear() {
    return await localStorage.clear();
    }
}
