const { storeData } = require("../../../services/controllerService");
const prismaService = require("../../../services/prismaService");

const GET_ALL_HEADER_STYLE = async (req, res) => {
    try 
    {
        const {
            page,
            limit,
            search,
            orderBy,
            order,
            header
        } = req.query;

        const where = {};

        if(header) where.header = parseInt(header)

        const orderByObj = {
            [orderBy]: order
        };

        const searchOptions = search ? {
            fields: [''], 
            value: search
        } : null;

        const include = {};

        return await storeData(res, 'header_style', {
            where,
            orderBy: orderByObj,
            page: page ? parseInt(page) : null,
            limit: limit ? parseInt(limit) : null,
            include,
            search: searchOptions
        });

    } 
    catch(err) 
    {
        return res.status(500).json({
            success: false,
            data: [],
            message: 'Серверийн алдаа гарлаа.' + err
        });
    }
};

module.exports = GET_ALL_HEADER_STYLE ;