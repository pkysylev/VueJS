const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "01234 5678 991",
                    email: "manuel@localhost.com"
                },
                {
                    id: "julie",
                    name: "Julie Jones",
                    phone: "09876 543 221",
                    email: "julie@localhost.com"
                }
            ]
        };
    }
});

app.component("friend-contact", {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsText }}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            // friend: {
            //     id: "julie",
            //     name: "Julie Jones",
            //     phone: "09876 543 221",
            //     email: "julie@localhost.com"
            // }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
    computed: {
        detailsText() {
            return `${this.detailsAreVisible ? "Hide" : "Show"} Details`;
        }
    }
});

app.mount("#app");