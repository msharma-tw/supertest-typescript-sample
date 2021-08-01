import { client } from "../test/client";

let response;

export async function get(endpoint: string) {

  try {
    response = await client().get(`${endpoint}`);
    return response;
    } catch (err) {
        throw new Error(('API Failed to fetch: ' + err));
    }
}

export async function post(endpoint: string, body: any) {

  try {
    response = await client()
                  .post(`${endpoint}`)
                  .send(body);
    return response;
    } catch (err) {
        throw new Error(('API Failed to fetch: ' + err));
    }
}