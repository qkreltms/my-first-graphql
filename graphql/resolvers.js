import people from "./db";

// https://www.apollographql.com/docs/graphql-tools/resolvers/
const resolvers = {
    Query: {
        name: () => "test1",
        people: () => people,
        person: (rootValue , { id }) => {
            return people.filter((person) => {
                if (person.id === id) {
                    return person;
                }
            })[0]
        }
    },
    Mutation: {
        addPerson: (rootValue, { name, age, gender }) => {
            const newPerson = {
                id: people.length + 1,
                name,
                age,
                gender
            }

            people.push(newPerson);
            return newPerson;
        }
    }
}

export default resolvers;