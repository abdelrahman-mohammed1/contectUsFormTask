import { create } from "zustand";

const useStore = create((set) => ({
    number: 0,
    increament: () => set((state) => ({ number: state.number + 1 })),
    decreament: () => set((state) => ({ number: state.number - 1 })),
    resetNumber: () => set(() => ({ number: 0 }))
}))


export const useProducts = create((set) => ({
    loading: false,
    data: [],
    fetchProducts: async (path) => {
        set({ loading: true });
        const response = await fetch(path);
        const data = await response.json();
        set({ data: data });
        set({ loading: false });
    }
}))


export const useUserInformation = create((set) => ({
    user: {
        name: '',
        age: '',
        email: '',
        phone: '',
    },
    updateUserName: (name) => set((state) => { return { user: { ...state.user, name } } }),
    updateUserAge: (age) => set((state) => { return { user: { ...state.user, age } } }),
    updateUserEmail: (email) => set((state) => { return { user: { ...state.user, email } } }),
    updateUserPhone: (newPhone) => set((state) => { return { user: { ...state.user, phone: newPhone } } })
}))

export default useStore;