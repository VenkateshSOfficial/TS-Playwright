import{test,expect} from '@playwright/test'


/*

(?=.*@sanity)
(?=.*@regression)
(?=.*@sanity)(?=.*@regression)

either sanity or regression
--grep "@sanity|@regression"

omit regression
--grep "@sanity" --grep invert "@regression"

*/
test('test1',{tag:'@sanity'},async()=>{
    console.log('This is sanity execution');
})

test('test2',{tag:'@regression'},async()=>{
    console.log('This is sanity execution');
})

test('test3',{tag:['@sanity','@regression']},async()=>{
    console.log('This is sanity execution');
})
