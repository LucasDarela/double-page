function tempo(request, response) {
    const dynamicDate = new Date();

    response.setHeader('Cache-Control', 's-maxage=10, stale-white-revalidade');

    response.json({
        date: dynamicDate.toGMTString()
    });
}

export default tempo;