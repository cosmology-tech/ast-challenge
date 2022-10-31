import babelTraverse from '@babel/traverse';
import { parse, ParserPlugin } from '@babel/parser';
import generate from '@babel/generator';
import * as t from '@babel/types';

const expectCode = (ast) => {
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}

const printCode = (ast) => {
    console.log(
        generate(ast).code
    );
}


it('works', () => {

    const code = `
export interface MyInterface {
    a: string;
    b: number;
}
`;

    const plugins: ParserPlugin[] = [
        'typescript',
    ];

    const ast = parse(code, {
        sourceType: 'module',
        plugins
    });

    babelTraverse(ast, {
        TSTypeAliasDeclaration(path) {
            console.log(path.node.id.name, path.parentPath.node);
        },
        TSInterfaceDeclaration(path) {
            path.node.id.name = 'MyOtherInterface'
            console.log(path.node.id.name, path.parentPath.node);
        }
    });


    expectCode(ast);


});