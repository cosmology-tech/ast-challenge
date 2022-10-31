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

    expectCode(t.file(t.program(
        [
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        t.identifier('myCoolFunction'),
                        t.arrowFunctionExpression(
                            [
                                t.identifier('some')
                            ],
                            t.blockStatement([])
                        )
                    )
                ]
            )
        ]
    )));


});