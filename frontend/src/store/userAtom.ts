import { atom, selector } from "recoil";

export const UserAtom = atom({
    key: "User",
    default: selector({
        key: "localUser",
        get: async () => {
            const userData = await localStorage.getItem("token")
            if (userData) {
                return userData
            }
            return null;
        }
    })
})