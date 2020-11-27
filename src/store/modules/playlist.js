export default {
    state: () => ({
        tracks: [],
        current: false,
        playing: false,
        audio: new Audio(),
    }),
    getters: {
        duration: state => {
            return state.audio.duration;
        }
    },
    mutations: {
        play: state => {
            state.playing = true;
        },
        pause: state => {
            state.playing = false;
        },
        switch: (state, payload) => {
            state.current = payload;
        },
    }
};