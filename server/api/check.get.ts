
export default defineEventHandler(async (event) => {

    const params = getQuery(event);

    

    return { status: 200,message: `Hello Check World! ${params.name}` };

});