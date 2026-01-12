const { storeData } = require("../../../services/controllerService");
const prismaService = require("../../../services/prismaService");

const GET_ALL_HEADER = async (req, res) => {
    try 
    {
        const {
            page,
            limit,
            search,
            orderBy,
            order
        } = req.query;

        const where = {};

        const orderByObj = {
            [orderBy]: order
        };

        const searchOptions = search ? {
            fields: [''], 
            value: search
        } : null;

        const include = {
                        header_menus_header_menus_headerToheader:{
                            include:{
                                header_submenus:{
                                    include:{
                                        header_tertiary_submenu:true
                                    }
                                }
                            }
                        },
                        header_style_header_style_headerToheader:true,
            };

        return await storeData(res, 'header', {
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

module.exports = GET_ALL_HEADER ;