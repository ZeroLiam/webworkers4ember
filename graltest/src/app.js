import pug from 'pug';

// Compile the source code
const compiledFunction = pug.compileFile('template.pug');

compiledFunction({
    name: 'Pendejo'
});