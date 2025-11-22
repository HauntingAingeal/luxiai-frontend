import { create } from "zustand";


type SessionStore = {
sessionId: string | null;
setSessionId: (id: string | null) => void;
};


export const useSessionStore = create<SessionStore>((set) => ({
sessionId: null,
setSessionId: (id) => set({ sessionId: id })
}));