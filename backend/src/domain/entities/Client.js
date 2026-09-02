class Client {
  constructor({ id, name, email, phone, createdAt }) {
    if (!name) throw new Error("Client name is required");
    if (!email) throw new Error("Client email is required");

    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.createdAt = createdAt || new Date();
  }
}

module.exports = Client;