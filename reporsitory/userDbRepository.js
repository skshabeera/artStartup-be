import User from "../model/User.js";

export async function findByEmail(email) {
  return User.findOne({ email });
}


export async function create(data) {
    return User.create(data);
}


