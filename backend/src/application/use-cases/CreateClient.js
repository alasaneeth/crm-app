const Client = require("../../domain/entities/Client");

class CreateClient {
  constructor(clientRepository) {
    this.clientRepository = clientRepository; // injected dependency (IClientRepository)
  }

  async execute({ name, email, phone }) {
    const client = new Client({ name, email, phone }); // Domain validation runs here
    return await this.clientRepository.create(client);
  }
}

module.exports = CreateClient;