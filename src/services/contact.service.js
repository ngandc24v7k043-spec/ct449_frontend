class ContactService {
    constructor(baseUR = "/api/contacts") {
        this.api = createApiClient(baseUR);
    }

    async getAll() {
        return (await this.api.get("/")).data;
    }

    async create(data) {
        return (await this.api.post("/", data)).data;
    }

    async deleteAll() {
        return (await this.api.delete("/")).data;
    }

    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
}

export default new ContactService();