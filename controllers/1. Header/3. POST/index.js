const { insertData } = require("../../../services/controllerService")
const bcrypt = require("bcrypt")
const prismaService = require("../../../services/prismaService") 

const POST_HEADER = async (req , res) => {
    try 
    {
        const {backgroundColor, fontColor, hoverColor, height, sticky} = req.body;

        if(!req.file)
        {
            return res.status(400).json({
                success:false,
                data:[],
                message: "Лого оруулна уу."
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

        const logoURL = `/${req.file.path}`

        const resultLogo = await prismaService.header.create({
            data:{
                logo: logoURL
            }
        })

        const resultLogoStyle = await prismaService.header_style.create({
            data: {
                header: parseInt(resultLogo.id),
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

module.exports = POST_HEADER