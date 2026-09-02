/**
 * Contract that any Client persistence implementation must follow.
 * Application layer depends on this abstraction, not on Sequelize directly.
 */
class IClientRepository {
  async create(client) {
    throw new Error("Method 'create()' must be implemented");
  }

  async findById(id) {
    throw new Error("Method 'findById()' must be implemented");
  }

  async findAll() {
    throw new Error("Method 'findAll()' must be implemented");
  }
}

module.exports = IClientRepository;