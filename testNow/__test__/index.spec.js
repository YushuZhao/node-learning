test('测试测试代码生成', () => {
    const src = new (require('../index'))();
    const ret = src.getTestSource('fun', 'class');
    expect(ret)
        .toBe(`
            test('TEST fun', ()=>{
                const fun = require('../class')
                const ret = fun()
                // expect(ret)
                // .toBe('test return')
            })
        `)
})

// test('测试文件名称', () => {
//     const src = new (require('../index'))()
//     const ret = src.getTestFileName('/abc/class.js')
//     console.log('getTestFileName', ret)
//     expect(ret)
//         .toBe('/abc/__test__/class.spec.js')
// })