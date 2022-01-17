import { data } from "autoprefixer";
import { Client, Entity, Schema, Repository } from "redis-om";

const client = new Client();

async function connect() {
    if(!client.isOpen()) {
        await client.open(process.env.REDIS_URL);
    }
}

class User extends Entity {}

let schema = new Schema(
  User,
  {
    name: { type: "string" },
    email: { type: "string" },
    role: { type: "string" },
    status: { type: "string" },
    active: { type: "boolean" },
  },
  {
    dataStructure: "JSON",
  }
);

export async function createUser(data) {
    await connect();
    
    const repository = new Repository(schema, client);

    const user = repository.createEntity(data);

    const id = await repository.save(user);

    return id;
}