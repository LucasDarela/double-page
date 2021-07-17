function tempo (request,response) {
    const dynamicDate = new Date();

    response.json({
        date: dyynamicDate.toGMTString()
    });
}

export default tempo;