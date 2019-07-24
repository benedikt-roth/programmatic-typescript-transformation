import { Project } from "ts-morph";

const project = new Project({
  compilerOptions: {
    outDir: 'out',
  },
});
const workingDir = 'out';

project.addExistingSourceFiles(`${workingDir}/**/*.ts`);
const myClassFile = project.createSourceFile(`${workingDir}/MyClass.ts`, "export class MyClass {}");

const myClass = myClassFile.getClassOrThrow("MyClass");
myClass.getName();
myClass.hasExportKeyword();
myClass.isDefaultExport();

const myInterface = myClassFile.addInterface({
    name: "IMyInterface",
    isExported: true,
    properties: [{
        name: "myProp",
        type: "number"
    }]
});

project.save();
