import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
      isDone: a.boolean(),
    })
    .authorization((allow) => [allow.owner()]),

  QuizQuestion: a.model({
    text: a.string(),
    quizId: a.id()!,
    questionId: a.id()!,
    quiz: a.belongsTo('Quiz','quizId'),
    question: a.belongsTo('Question', 'questionId'),
  })
  .authorization((allow) => [allow.owner()]),

  Quiz: a.model({
    id: a.id()!,
    title: a.string(),
    description: a.string(),
    published: a.boolean()!,
    questions: a.hasMany('QuizQuestion', 'quizId'),

  })
  .authorization((allow) => [allow.owner()]),

  Question: a.model({
    id: a.id()!,
    text: a.string(),
    quizs: a.hasMany('QuizQuestion', 'questionId'),
  })
  .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode : 'userPool'
  },
});
