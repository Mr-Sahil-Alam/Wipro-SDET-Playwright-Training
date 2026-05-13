/*
Recursive Navigation Type
Scenario: You are building a tree structure for a file system or a sidebar menu.
Task: Define a type FolderNode that has a name: string. It should also have an optional files:
 string[] and an optional subFolders property, which is an array of FolderNode objects.

*/
type FolderNode = {

    name: string;

    files?: string[];

    subFolders?: FolderNode[];

};


const project: FolderNode = {

    name: "Root",

    files: ["index.ts", "package.json"],

    subFolders: [

        {

            name: "src",

            files: ["app.ts", "utils.ts"]

        },

        {

            name: "tests",

            files: ["test.spec.ts"],

            subFolders: [

                {

                    name: "api-tests",

                    files: ["user.test.ts"]

                }

            ]

        }

    ]

};

console.log(project);