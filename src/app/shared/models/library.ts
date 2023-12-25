export class Library {
    id!: string | null;
    address: string;

    constructor(id: string, address: string) {
        this.address = address;
    }
}
