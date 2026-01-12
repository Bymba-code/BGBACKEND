const { insertData } = require("../../../services/controllerService")
const bcrypt = require("bcrypt")
const prismaService = require("../../../services/prismaService") 

const POST_HEADER_STYLE = async (req , res) => {
    try 
    {
        const {header, backgroundColor, fontColor, hoverColor, height, sticky} = req.body;

        if(!header)
        {
            return res.status(400).json({
                success:false,
                data:[],
                message: "Header сонгоно уу."
            })
        }

        if(!backgroundColor)
        {
            return res.status(400).json({
                success:false,
                data:[],
                message: "Дэвсгэрийн өнгө оруулна уу."
            })
        }
        if(!fontColor)
        {
            return res.status(400).json({
                success:false,
                data:[],
                message: "Фонтын өнгө оруулна уу."
            })
        }
        if(!hoverColor)
        {
            return res.status(400).json({
                success:false,
                data:[],
                message: "Ховер өнгө оруулна уу."
            })
        }
        if(!height)
        {
            return res.status(400).json({
                success:false,
                data:[],
                message: "Өндөр оруулна уу."
            })
        }

        const result = await prismaService.header_style.create({
            data: {
                header: parseInt(header),
                backgroundColor: backgroundColor,
                fontColor:fontColor,
                hoverColor:hoverColor,
                height:height,
                sticky:parseInt(sticky)
            }
        })

        return res.status(200).json({
            success:true,
            data:[],
            message: "Амжилттай."
        })
        
    }
    catch(err)
    {

    }
}

module.exports = POST_HEADER_STYLE