import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  UserProfile: a
    .model({
      email: a.string().required(),
      profileOwner: a.string().required(),
    })
    .authorization((allow) => [
      allow.owner().to(["read", "create", "update"]),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
});
