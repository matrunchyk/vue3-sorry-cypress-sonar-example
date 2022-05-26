import {ref, watch} from "vue";

export interface Post {
    uuid: string;
    title: string;
    content: string;
    date: Date;
}

export interface User {
    name: string;
}

class Store {
    public posts = ref<Post[]>();

    public currentUser = ref<User>(JSON.parse(sessionStorage.getItem('user')) || null);

    constructor() {
        const posts = JSON.parse(sessionStorage.getItem('posts') || "[]");
        this.posts.value = posts.map(p => ({
            ...p,
            date: new Date(p.date)
        }))

        console.log(this.posts.value)
    }
}

const store = new Store();

watch(store.currentUser, (user) => {
    sessionStorage.setItem('user', JSON.stringify(user))
});

export function getUser(): User {
    return store.currentUser.value;
}

export default function useStore() {
    function persist() {
        sessionStorage.setItem('posts', JSON.stringify(store.posts.value));
    }

    function logout() {
        store.currentUser.value = null;
        sessionStorage.removeItem('user');
    }

    function addPost(post: Post) {
        store.posts.value.push(post);
        persist();
    }

    function removePost(post: Post) {
        const index = store.posts.value.findIndex(p => p.uuid === post.uuid);
        store.posts.value.splice(index, 1);
        persist();
    }

    return {
        posts: store.posts,
        currentUser: store.currentUser,
        logout,
        addPost,
        removePost,
    }
}
