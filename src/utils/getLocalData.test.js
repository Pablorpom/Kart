import { buildUrl } from "./getLocalData";
import getData from "./getLocalData"

describe('getLocalData', ()=>{
    describe('buildUrl()', ()=>{
        it('Should build an URL with the given source', ()=>{
            expect(buildUrl('source')).toBe(`./data/source.json`)
        })
    })
    describe('getData()', ()=>{
        it('Should throw an object with the error property when the function fails', async ()=>{
            expect(await getData()).toStrictEqual({
                error: 'Something went wrong getting the data'
            })
        })
    })
})