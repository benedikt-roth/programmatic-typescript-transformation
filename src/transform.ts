import { Project, StructureKind } from "ts-morph";

// initialize
const project = new Project({
  compilerOptions: {
    outDir: 'out',
  },
});

project.addExistingSourceFiles("dummy-files/**/*.ts");
const myClassFile = project.createSourceFile("dummy-files/MyClass.ts", "export class MyClass {}");

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
