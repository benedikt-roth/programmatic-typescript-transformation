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

const testFile = project.getSourceFileOrThrow(`${workingDir}/test.ts`);
testFile.getNamespaces().forEach(ns => {
  ns.unwrap();
});

project.save();
