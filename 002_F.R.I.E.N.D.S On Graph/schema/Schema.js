const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql

// Dummy Datas
const friends_character = [
    {
        id: "1",
        name: "Chandler Muriel Bing",
        nickname: "Ms. Chanandler Bong",
        roommates: [
            "2","3","5"
        ]
    },
    {
        id: "2",
        name: "Joseph Francis Tribbiani",
        nickname: "Ken Adams",
        roommates: [
            "1","5","6","4"
        ]
    },
    {
        id: "3",
        name: "Monica Geller (Bing)",
        nickname: "Crazy Plate Lady",
        roommates: [
            "4","6","1"
        ]
    },
    {
        id: "4",
        name: "Rachel Greene",
        nickname: "Raquel",
        roommates: [
            "1", "2", "5"
        ]
    },
    {
        id: "5",
        name: "Ross Geller",
        nickname: "Wet Pants Geller",
        roommates: [
            "1", "4", "2"
        ]
    },
    {
        id: "6",
        name: "Phoebe Buffay",
        nickname: "Princess Consuela Bananahammock",
        roommates: [
            "4", "3", "2"
        ]
    }
]

// Describing Character Type
const CharacterType = new GraphQLObjectType({
    name: "Character",
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        nickname: {type: GraphQLString},
        roommates: {
            type: new GraphQLList(CharacterType),
            args: {},
            resolve(parent, args) {
                const op = []
                parent.roommates.map(rm => {
                    friends_character.map(fc => {
                        if(fc.id === rm) {
                            console.log(fc)
                            op.push(fc)
                        }
                    })
                })
                return op
            }
        }
    })
})

// Describing the Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        character: {
            type: CharacterType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return friends_character.filter(fc => {return id === args.id})
            }
        },
        characters: {
            type: new GraphQLList(CharacterType),
            args: {},
            resolve(parent, args){
                return friends_character
            }
        }
    }
})


// Exporting root query as Schema
module.exports = new GraphQLSchema({
    query: RootQuery
})